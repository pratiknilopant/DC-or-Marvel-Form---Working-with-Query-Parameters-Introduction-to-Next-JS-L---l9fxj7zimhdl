"use client";
import { useState } from "react";

function FormA({ age, onMovieChange }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const movieName = formData.get("movie");
    if (!movieName) {
      return;
    }
    onMovieChange(movieName);
  };
  return (
    <form id="dc" onSubmit={handleSubmit}>
      <h2>Form A</h2>
      <label>
        Select DC Shows:
        <select name="movie">
          <option value="">--Select--</option>
          <option value="The Flash">The Flash</option>
          <option value="Arrow">Arrow</option>
          <option value="Supergirl">Supergirl</option>
          <option value="Legends of Tomorrow">Legends of Tomorrow</option>
        </select>
      </label>
      <br />
      <label>
        Enter your age:
        <input type="number" value={age} disabled />
      </label>
      <br />
      <button id="submit-dc" type="submit">
        Submit
      </button>
    </form>
  );
}
export default FormA;