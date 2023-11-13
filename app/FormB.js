"use client";
// import the code very bad ?
function FormB({ age, onMovieChange }) {
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
    <form id="marvel" onSubmit={handleSubmit}>
      <h2>Form B</h2>
      <label>
        Select Marvel Shows:
        <select name="movie">
          <option value="">--Select--</option>
          <option value="WandaVision">WandaVision</option>
          <option value="The Falcon and the Winter Soldier">
            The Falcon and the Winter Soldier
          </option>
          <option value="Loki">Loki</option>
          <option value="What If...?">What If...?</option>
        </select>
      </label>
      <br />
      <label>
        Enter your age:
        <input type="number" value={age} disabled />
      </label>
      <br />
      <button id="submit-marvel" type="submit">
        Submit
      </button>
    </form>
  );
}
export default FormB;