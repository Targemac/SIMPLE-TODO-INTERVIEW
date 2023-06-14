import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoProvider";

const Summary = () => {
  const { all_tasks, completed_tasks } = useContext(TodoContext);

  return (
    <div className="summary_grp">
      <div className="summary_item">
        <div className="large_text">{all_tasks}</div>
        <div className="small_text">All Tasks</div>
      </div>
      <div className="summary_item">
        <div className="large_text">{completed_tasks}</div>
        <div className="small_text">Completed</div>
      </div>
    </div>
  );
};

export default Summary;
