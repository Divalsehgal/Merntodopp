import React, { Component } from "react";
import { getTodoById, updateTodoById } from "../actions/index";
import { connect } from "react-redux";

class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: "",
    };
  }

  async componentDidMount() {
    await this.props.getTodoById(this.props.location.state.id)
    setTimeout(()=>{
      this.setState({
        todo_description: this.props.todobyid.todo_description,
        todo_responsible: this.props.todobyid.todo_responsible,
        todo_priority: this.props.todobyid.todo_priority,
        todo_completed: this.props.todobyid.todo_completed,
      });
    },1000)
    
  
      
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

  onChangeTodoCompleted = (e) => {
    this.setState({
      todo_completed: !this.state.todo_completed,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed,
    };
    this.props.updateTodoById(this.props.location.state.id, obj);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h3 align="center">Update Todo</h3>
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
          <div className="form-check">
            <input
              className="form-check-input"
              id="completedCheckbox"
              type="checkbox"
              name="completedCheckbox"
              onChange={this.onChangeTodoCompleted}
              checked={this.state.todo_completed}
              value={this.state.todo_completed}
            />
            <label className="form-check-label" htmlFor="completedCheckbox">
              Completed
            </label>
          </div>

          <br />

          <div className="form-group">
            <input
              type="submit"
              value="Update Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
const mapstateTorprops = (state) => {
  return {
    todobyid: state.todobyid,
  };
};

export default connect(mapstateTorprops, { getTodoById, updateTodoById })(
  EditTodo
);
