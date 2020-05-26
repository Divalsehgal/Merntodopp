import React, { Component } from "react";
import { addTodo } from "../actions/index";
import {connect} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";


class CreateList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false,
    };
  }
  onChangeTodoDescription = (e) => {
    this.setState({
      todo_description: e.target.value,
    });
  };

  onChangeTodoResponsible = (e) => {
    this.setState({
      todo_responsible: e.target.value,
    });
  };

  onChangeTodoPriority = (e) => {
    this.setState({
      todo_priority: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const body = {
      todo_description: this.state.todo_description,
      todo_completed: this.state.todo_completed,
      todo_priority: this.state.todo_priority,
      todo_responsible: this.state.todo_responsible,
    };
 this.props.addTodo(body);
      this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false,
    });
  };
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_responsible}
              onChange={this.onChangeTodoResponsible}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_priority === "Low"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todo_priority === "Medium"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.todo_priority === "High"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addTodo })(CreateList);

//export default CreateList