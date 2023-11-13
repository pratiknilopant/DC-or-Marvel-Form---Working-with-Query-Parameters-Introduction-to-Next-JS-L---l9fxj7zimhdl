"use client";
import React, { useEffect, useState } from "react";
import FormA from "./FormA";
import FormB from "./FormB";
import Summary from "./Summary";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [age, setAge] = useState(null);

  function handMovieChange(movieName) {
    setFormData((oldData) => {
      const newData = { ...oldData };
      newData.movieName = movieName;
      return newData;
    });
    setStep(4);
  }

  return (
    <div>
      {(step === 1 || !age) && (
        <div id="start-page">
          <h1>Step 1: Select Form Type and Enter Age</h1>
          <label>
            Enter your age:
            <input
              value={age}
              type="number"
              onChange={(e) => {
                const ageInput = parseInt(e.target.value);
                if (isNaN(ageInput)) {
                  return;
                }
                setAge(ageInput);
                setFormData({ age: ageInput });
              }}
            />
          </label>
          <br />
          <label>
            Select Form Type:
            <select
              onChange={(e) => {
                const formValue = parseInt(e.target.value);
                setStep(formValue);
                setFormData((old) => {
                  const newForm = { ...old };
                  // make this better this is better
                  newForm.fromType = formValue === 2 ? "Form A" : "Form B";
                  return newForm;
                });
              }}
            >
              <option value={1}>--Select--</option>
              <option value={2}>Form A</option>
              <option value={3}>Form B</option>
            </select>
          </label>
          <br />
        </div>
      )}
      {step === 2 && age && (
        <div>
          <FormA age={age} onMovieChange={handMovieChange} />
        </div>
      )}
      {step === 3 && age && (
        <div>
          <FormB age={age} onMovieChange={handMovieChange} />
        </div>
      )}
      {(step === 2 || step === 3) && age ? (
        <button id="go-back" onClick={() => setStep(1)}>
          Go Back
        </button>
      ) : null}

      {step === 4 && (
        <div>
          <Summary formData={formData} />
          <button
            id="start-over"
            onClick={() => {
              setFormData({});
              setStep(1);
              setAge(null);
            }}
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
