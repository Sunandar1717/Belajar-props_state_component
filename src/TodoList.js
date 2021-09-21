import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      input: "",
    };
  }

  onSubmit() {
    console.log("ini adalah",this.state.input);
    const curentTodoList = this.state.todoList;
    curentTodoList.push(this.state.input);
    this.setState({ todoList: curentTodoList });
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <label>input new TodoList</label>
        <input
          type="text"
          onChange={(event) => this.setState({ input: event.target.value })}
        ></input>
        <button onClick={() => this.onSubmit()}>
            Add
        </button>

        {this.state.todoList.map((todoList) =>(
            <p>{todoList}</p>
        ))}
      </div>
    );
  }
}
export default TodoList;