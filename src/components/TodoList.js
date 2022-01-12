import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../actions";
const TodoList = (props) => {
  const onClickButton = (todo) => {
    props.deleteTask(todo);
  };

  const renderTodoList = () => {
    return props.todoList.map((todo) => {
      if (props.taskType.includes(todo.taskType)) {
        return (
          <div key={todo.taskName} className="taskContent">
            <p className="taskName" style={{ fontSize: "0.7rem" }}>
              {todo.taskName}
            </p>
            <div className="taskBtnContainer">
              <button className="taskBtn" onClick={() => onClickButton(todo)}>
                Delete
              </button>
            </div>
          </div>
        );
      }
    });
  };
  return <div className="taskContainer">{renderTodoList()}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todoList: state.todoList,
    taskType: state.filter,
  };
};

export default connect(mapStateToProps, {
  deleteTask,
})(TodoList);
