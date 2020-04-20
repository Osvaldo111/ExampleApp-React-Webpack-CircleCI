import React from "react";
// import "../style/YOUR_STYLE.css";
import { connect } from "react-redux";
// import { actionFunction } from "../actions"; // You can use this action
import image from "../../images/trademark.svg";

/**
 * Date: 02/27/2019
 * author: Osvaldo Carrillo
 * This class is a template with connect implemeneting
 * "maoStatetoProps" and "mapDispathToProps"
 */
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  myfunction = () => {};
  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        Example Component :)
        <img src={image} alt="" width="50px" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // storeProps: state,
  };
}
const mapDispatchToProps = {
  // actionFunction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Component);
