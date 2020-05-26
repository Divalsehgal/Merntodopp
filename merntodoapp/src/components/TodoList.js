import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodo } from "../actions/index";
import { Link } from "react-router-dom";
import "../index.css"
class TodoList extends Component {
  componentDidMount() {
    this.props.getTodo();
  }

  render() {
    return (
      <div>
        <div>
        <h3>Todos List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Author</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody >
              {this.props.todo &&
                this.props.todo.map((item, index) => {
                  const {
                    todo_description,
                    todo_completed,
                    todo_responsible,
                    todo_priority,
                    _id,
                  } = item;

                  return (
                    <tr>
                      <td className={todo_completed ? 'completed' : ''}>{todo_responsible}</td>
                      <td className={todo_completed ? 'completed' : ''}>{todo_description}</td>
                      <td className={todo_completed ? 'completed' : ''}>{todo_priority}</td>
                      <td>
                        <Link
                          to={{
                            pathname: `/edit/${_id}`,
                            state: { id: _id },
                          }}
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <hr />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

export default connect(mapStateToProps, { getTodo })(TodoList);
