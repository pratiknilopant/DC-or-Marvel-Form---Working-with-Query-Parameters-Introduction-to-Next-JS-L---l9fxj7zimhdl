'use client'
import { useState } from "react";
function Summary({ formData }) {
    return (
        <div id='summary'>
      <h2>Summary</h2>
      <p>Form Type: {formData.type}</p>
      <p>Age: {formData.age}</p>
      {
        formData.DS?<p>DC Shows: {formData.DS}</p>:<p>Marvel Shows: {formData.MS}</p> 
      }     
    </div>
    );
}
export default Summary;