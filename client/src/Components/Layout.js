import React, { useContext } from "react";
import TodoProviderContext from "../Providers/TodoProvider";

import "./css/laptop-layout.css";
import "./css/tablet-layout.css";
import "./css/mobile-layout.css";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import Summary from "./Summary";

const Layout = () => {
  const { text } = useContext(TodoProviderContext);

  return (
    <div className="todo_wrapper">
      <div className="wrapper_head">
        <h1 className="wrapper_title">Simple Todo App {text} </h1>
        <Summary />
      </div>
      <AddTask />

      <div className="wrapper_body">
        <TaskItem />
      </div>
    </div>
  );
};

export default Layout;
