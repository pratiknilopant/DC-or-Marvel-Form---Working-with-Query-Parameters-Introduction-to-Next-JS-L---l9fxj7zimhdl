"use client";
import { useState } from "react";
function Summary({ formData }) {
  return (
    <div id="summary">
      <h2>Summary</h2>
      <p>Form Type: {formData.fromType}</p>
      <p>Age: {formData.age}</p>

      {formData.fromType === "Form A" && <p>DC Shows: {formData.movieName}</p>}

      {formData.fromType === "Form B" && (
        <p>Marvel Shows: {formData.movieName}</p>
      )}
    </div>
  );
}
export default Summary;