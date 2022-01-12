export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: task,
  };
};

export const deleteTask = (task) => {
  return {
    type: "DELETE_TASK",
    payload: task,
  };
};

export const taskTypeFilter = (type) => {
  return {
    type: "TYPE_FILTER",
    payload: type,
  };
};
