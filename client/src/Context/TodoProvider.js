import React, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]); // an array of to-do list
  const [todo, setTodo] = useState(""); // single to-do
  const [todoEditing, setTodoEditing] = useState(null); //
  const [editingText, setEditingText] = useState(""); //

  /**
   ******** FETCHING DATA FROM LOCAL STORAGE *********
   **/
  useEffect(() => {
    const todos = localStorage.getItem("todos"); //get items from local storage
    const loadedTodos = JSON.parse(todos); //convert from json format to actual format

    /**we check if the todos array present and not empty **/
    if (loadedTodos) {
      setTodos(loadedTodos);
    }

    /**
    Below, we leave the dependency list empty because we only want the 
    hook to be called once the bowser gets loaded.
  **/
  }, []);

  /**
   ******** SAVING DATA TO LOCAL STORAGE *********
   **/
  useEffect(() => {
    const json = JSON.stringify(todos); // we, we convert the array into strings
    localStorage.setItem("todos", json); // here we store the toodos in localStorage with the name of the todos

    /**
    Below, we pass the todos array in the useEffect dependency list so that each time the todo list
    changes or is updated, the useEffect hook can always be called and the todos array would be saved to 
    the localStorage of the bowser .
  **/
  }, [todos]);

  // function that runs when form gets submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    // update the current list of todos using the spread operator
    setTodos([...todos, newTodo]);

    // make the input field empty again for another text to be added
    setTodo("");
  };

  // function to delete a single todo item
  const deleteTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos); //updating entire todo list
  };

  // function to change the status of a single todo item
  const toggleComplete = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      /**
      here, we check to see if any of the todo in the array match 
      the one we provided, then we toggle the completed property
      **/
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos); //updating entire todo list
  };

  // function to edit a single todo item
  const editTodo = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos); //updating entire todo list
    setTodoEditing(null); //resetting to default
    setEditingText(""); //resetting to default
  };

  // dashboard values
  let all_tasks = todos.length;
  let completed_tasks = todos.filter((todo) => {
    // yet to complete
  });
  // console.log(completed_tasks.length);
  completed_tasks = 0;

  return (
    <TodoContext.Provider
      value={{
        all_tasks,
        completed_tasks,
        todo,
        setTodo,
        todos,
        setTodos,
        handleSubmit,
        deleteTodo,
        toggleComplete,
        editTodo,
        todoEditing,
        setTodoEditing,
        setEditingText,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
