import React from "react";
import { connect } from "react-redux";
import { taskTypeFilter } from "../actions";
const Filter = (props) => {
  const onClickHouseWork = () => {
    props.taskTypeFilter(["houseWork"]);
  };
  const onClickWork = () => {
    props.taskTypeFilter(["work"]);
  };
  const onClickOther = () => {
    props.taskTypeFilter(["other"]);
  };
  const onClickAll = () => {
    props.taskTypeFilter(["houseWork", "work", "other"]);
  };
  return (
    <div className="filterContainer">
      <button onClick={onClickAll} className="filterBtn">
        全部
      </button>
      <button onClick={onClickHouseWork} className="filterBtn">
        家事
      </button>
      <button onClick={onClickWork} className="filterBtn">
        工作
      </button>
      <button onClick={onClickOther} className="filterBtn">
        其他
      </button>
    </div>
  );
};
export default connect(null, { taskTypeFilter })(Filter);
