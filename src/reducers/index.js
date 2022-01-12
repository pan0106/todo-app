import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const initial = [
  { taskName: "打掃房間", taskType: "houseWork" },
  { taskName: "拜訪客戶-Alex", taskType: "work" },
  { taskName: "拜6聚餐訂位", taskType: "other" },
];

const todoListReducer = (todoList = initial, action) => {
  if (action.type === "ADD_TASK") {
    return [...todoList, action.payload];
  } else if (action.type === "DELETE_TASK") {
    return todoList.filter((task) => {
      return task !== action.payload;
    });
  }
  return todoList;
};

const filterReducer = (taskType = ["houseWork", "work", "other"], action) => {
  if (action.type === "TYPE_FILTER") {
    return action.payload;
  }
  return taskType;
};

export default combineReducers({
  todoList: todoListReducer,
  filter: filterReducer,
  form: formReducer,
});
