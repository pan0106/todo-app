import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addTask } from "../actions";

class AddTodo extends React.Component {
  renderInput({ input }) {
    return <input {...input} placeholder="新增代辦事項" className="input" />;
  }
  renderDropDown({ input, defaultValue }) {
    return (
      <select defaultValue={defaultValue} {...input} className="dropdown">
        <option value="houseWork">家事</option>
        <option value="work">工作</option>
        <option value="other">其他</option>
      </select>
    );
  }

  onSubmit = (formValues) => {
    if (formValues.taskName) {
      this.props.addTask(formValues);
      this.props.reset();
    }
    return;
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="taskName" component={this.renderInput} />
        <Field name="taskType" component={this.renderDropDown} />
        <button className="addBtn">Add</button>
      </form>
    );
  }
}

const formWrapped = reduxForm({
  form: "todocreate",
  initialValues: {
    taskType: "houseWork",
  },
})(AddTodo);

export default connect(null, { addTask })(formWrapped);
