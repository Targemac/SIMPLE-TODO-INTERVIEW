import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoProvider";

const AddTask = () => {
  const { handleSubmit, todo, setTodo } = useContext(TodoContext);

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form_wrapper">
        <input
          type="text"
          className="form_input"
          placeholder="Add new task here"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit" className="form_btn">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTask;
