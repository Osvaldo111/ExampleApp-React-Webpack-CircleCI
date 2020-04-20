import React, { Component } from "react";
import "../../style/todoPage.scss";
import InputBox from "../components/InputBox";
import TodoCard from "../components/TodoCard";

class TodoPage extends Component {
  constructor(props) {
    super(props);
  }
  isInputBoxValid = (isValid) => {
    console.log(isValid, "**");
  };
  render() {
    return (
      <div className="todoPage">
        <div className="tdoPgTop">
          <InputBox isInputBoxValid={this.isInputBoxValid} />
        </div>
        <div className="tdoPgBttm">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    );
  }
}

export default TodoPage;
