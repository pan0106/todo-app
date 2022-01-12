import React from "react";
import AddTodo from "./AddTodo";
import Filter from "./Filter";
import TodoList from "./TodoList";
const App = () => {
  return (
    <div className="container">
      <div className="todolist">
        <h1 className="header">TO DO LIST</h1>
        <AddTodo />
        <Filter />
        <div className="todos">
          <TodoList />
        </div>
      </div>
    </div>
  );
};
export default App;
