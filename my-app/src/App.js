import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      activeItem: {
        id: null,
        title: "",
        complete: false,
      },
      editing: false,
    };
    this.fetchTasks = this.fetchTasks.bind(this);
  }

  componentWillMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    console.log("fetching...");
    fetch("http://127.0.0.1:8000/todo/task-list/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          todoList: data,
        })
      );
  }

  render() {
    var tasks = this.state.todoList;
    return (
      <div className="container">
        <div id="task-container">
          <div id="form-wrapper">
            <form id="form">
              <div className="flex-wrapper">
                <div style={{ flex: 6 }}>
                  <input
                    id="title"
                    className="form-control"
                    type="text"
                    name="title"
                    placeholder="Add Task..."
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <input
                    id="submit"
                    className="btn btn-warning"
                    type="submit"
                    name="Add"
                  />
                </div>
                {/* <strike>hey</strike> */}
              </div>
            </form>
          </div>
          <div id="list-wrapper">
            {tasks.map(function (task, index) {
              return (
                <div key={index} className="task-wrapper flex-wrapper">
                  <div style={{ flex: 7 }}>
                    <span>{task.title}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <button className="btn btn-sm btn-outline-info">
                      Edit
                    </button>
                  </div>
                  <div style={{ flex: 1 }}>
                    <button className="btn btn-sm btn-outline-dark delete">
                    {/* <ion-icon name="checkmark-outline"></ion-icon> */}-
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
