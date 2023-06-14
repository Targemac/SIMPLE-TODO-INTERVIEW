import React from "react";

const AddTask = () => {
  return (
    <form action="">
      <div className="form_wrapper">
        <input
          type="text"
          className="form_input"
          placeholder="Add new task here"
        />
        <button type="submit" className="form_btn">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTask;
