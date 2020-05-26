import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import CreateList from "./components/CreateList";
import EditTodo from "./components/EditTodo";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="routes">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
         
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <Route path="/create" component={CreateList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route exact path="/" component={TodoList} />
      </div>
    );
  }
}
