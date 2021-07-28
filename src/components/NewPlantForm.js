import React from "react";

function NewPlantForm({handleUserInput, handleForm}) {



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleForm} >
        <input
          onChange={handleUserInput}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          onChange={handleUserInput}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={handleUserInput}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
