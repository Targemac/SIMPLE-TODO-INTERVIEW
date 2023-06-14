import React, { useContext } from "react";

import "./css/laptop-layout.css";
import "./css/tablet-layout.css";
import "./css/mobile-layout.css";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import Summary from "./Summary";

import { TodoContext } from "../Context/TodoProvider";

const Layout = (props) => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="todo_wrapper">
      <div className="wrapper_head">
        <h1 className="wrapper_title">Simple Todo App </h1>
        <Summary />
      </div>
      <AddTask />

      <div className="wrapper_body">
        {todos.map((todo) => (
          <TaskItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Layout;
