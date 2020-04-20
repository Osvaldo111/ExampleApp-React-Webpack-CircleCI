import React from "react";
import "../../style/inputBox.scss";
import { storeTodo } from "../actions";
import { connect } from "react-redux";

/**
 *This class is designed to recived the input
 * of the user.
 */
class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.submitTheTodo = this.submitTheTodo.bind(this);
    this.state = {
      inputTxt: "",
      errEmptyStr: false,
    };
  }

  handleChange = (event) => {
    this.setState({ inputTxt: event.target.value });
  };

  submitTheTodo() {
    const { inputTxt } = this.state;

    if (inputTxt.length > 0) {
      this.setState({ errEmptyStr: false }, () => {
        this.props.isInputBoxValid(true);
        this.storeNewActivity(inputTxt);
      });
    } else {
      this.setState({ errEmptyStr: true }, () => {
        this.props.isInputBoxValid(false);
      });
    }
  }

  storeNewActivity = (activity) => {
    const prevActivities = this.props.tdoLiRed.TodoList.activities;
    let activitiesList = [];
    activitiesList.push(activity);
    activitiesList = [...prevActivities, ...activitiesList];
    this.props.storeTodo(activitiesList);
  };

  render() {
    const { inputTxt, errEmptyStr } = this.state;
    return (
      <div className="inputCt">
        <input
          type="text"
          className="inputBox"
          placeholder="Write your todo..."
          value={inputTxt}
          onChange={this.handleChange}
        ></input>
        <i
          className="fa fa-plus-circle inputBtn"
          onClick={this.submitTheTodo}
        ></i>
        <div className="errEmpt">
          {errEmptyStr ? "Please, enter an activity" : ""}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tdoLiRed: state,
  };
}
const mapDispatchToProps = {
  storeTodo,
};
// export default InputBox;
export default connect(mapStateToProps, mapDispatchToProps)(InputBox);
