import React, { createContext } from "react";

const TodoProvider = createContext();

const TodoProviderContext = ({ children, props }) => {
  let text = "hello bro";

  return <TodoProvider.Provider value={text}>{children}</TodoProvider.Provider>;
};

export default TodoProviderContext;
