'use client';
import React, { useEffect, useState } from 'react';
import FormA from './FormA';
import FormB from './FormB';
import Summary from './Summary';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age:'',
    type:"",
    DS:"",
    MS:"",
    step:'',
  });
  const [age, setAge] = useState('');

  useEffect(()=>{
    setFormData(oldData=>{
      return {
        ...oldData,
        age:age,
        step:step,
      }
    })
    console.log(step);
  },[age,step])

  return (
    <div>
      {(step === 1) && (
        <div id='start-page'>
          <h1>Step 1: Select Form Type and Enter Age</h1>
          <label htmlFor="age">
            Enter your age:</label>
            <input id="age" type="number" onChange={(e)=>{
              setAge(parseInt(e.target.value));
            }} value={age} />
          <br />
          <label> 
            Select Form Type:
            <select onChange={(e) => setStep(parseInt(e.target.value))}>
              <option value={1}>--Select--</option>
              <option value={2}>Form A</option>
              <option value={3}>Form B</option>
            </select>
          </label>
          <br />
        </div>
      )}
      {(step === 2 && age) ?(
        <div>
        <FormA onSubmit={setFormData} setStep={setStep} age={age} />
      </div>        
      ):null}
      {(step === 3 && age)? (
        <div>
          <FormB onSubmit={setFormData} setStep={setStep} age={age} />
        </div>
      ):null}
      {(step === 2 || step === 3) && age ? (
        <button id='go-back' onClick={() => {setStep(1);setAge('')}}>
          Go Back
        </button>
      ) : null}

      {step === 4 && (
        <div>
          <Summary formData={formData}/>
          <button onClick={() =>{ setStep(1); setAge('')}} id='start-over'>Start Over</button>
        </div>
      )}
    </div>
  );
};

export default App;