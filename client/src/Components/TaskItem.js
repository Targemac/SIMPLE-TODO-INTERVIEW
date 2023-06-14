import React from "react";

const TaskItem = () => {
  return (
    <div className="task_item">
      <input className="task_checkbox" type="checkbox" />
      <input
        className="task_edit_field"
        type="text"
        placeholder="Edit task here"
      />
      <div className="task_text">Read my books</div>
      <span>
        <button className="task_edit_btn" type="submit">
          Edit
        </button>
        <button className="task_delete_btn" type="submit">
          Delete
        </button>
      </span>
    </div>
  );
};

export default TaskItem;
