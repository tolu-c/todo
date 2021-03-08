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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    console.log(`Name: ${name} and Value : ${value}`);

    this.setState({
      activeItem: {
        ...this.state.activeItem,
        title: value,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("ITEM:", this.state.activeItem);

    var url = "http://127.0.0.1:8000/todo/task-create/";
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(this.state.activeItem),
    }).then((response) => {
      this.fetchTasks();
      this.setState({
        activeItem: {
          id: null,
          title: "",
          completed: false,
        },
      })
    });
  }

  render() {
    var tasks = this.state.todoList;
    return (
      <div className="container">
        <div id="task-container">
          <div id="form-wrapper">
            <form onSubmit={this.handleSubmit} id="form">
              <div className="flex-wrapper">
                <div style={{ flex: 6 }}>
                  <input
                    onChange={this.handleChange}
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
