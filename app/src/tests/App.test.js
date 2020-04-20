import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import InputBox from "../components/InputBox";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "../reducers/store";
import { createSerializer } from "enzyme-to-json";
import { spy } from "sinon";

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("App validetion <App />", () => {
  jest.clearAllMocks();
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
  });

  it("Check the input fields", () => {
    const wrapper = mount(<InputBox store={store} />);
    let len = wrapper.find("input").length;
    expect(len).toEqual(1);
  });

  it("Check when the user inputs an empty string", () => {
    let formSpy = jest.fn();
    const wrapper = mount(<InputBox store={store} isInputBoxValid={formSpy} />);
    wrapper.find(".inputBox").simulate("change", {
      target: { value: "" },
    });
    wrapper.find(".inputBtn").simulate("click");
    expect(formSpy).toHaveBeenCalledWith(false);
    expect(wrapper.find(".errEmpt").text()).toBe("Please, enter an activity");
  });

  it("Check when the user inputs a valid activity", () => {
    let formSpy = jest.fn();
    const wrapper = mount(<InputBox store={store} isInputBoxValid={formSpy} />);
    wrapper.find(".inputBox").simulate("change", {
      target: { value: "Cleaning the house.." },
    });
    wrapper.find(".inputBtn").simulate("click");
    expect(formSpy).toHaveBeenCalledWith(true);
    expect(wrapper.find(".errEmpt").text()).toBe("");
  });

  it("Check the activities are being store correctly", () => {
    // jest.clearAllMocks();
    // let formSpy = jest.fn();
    // // const wrapper = shallow(
    // //   <InputBox store={store} isInputBoxValid={formSpy} />
    // // ).dive();
    // const wrapper = mount(
    //   <InputBox store={store} isInputBoxValid={formSpy} />
    // ).find("InputBox");
    // wrapper.find(".inputBox").simulate("change", {
    //   target: {
    //     value: "Ain't working with this",
    //   },
    // });
    // wrapper.find(".inputBtn").simulate("click");
    // // wrapper.find(".inputBox").simulate("change", {
    // //   target: {
    // //     value: "Groceries",
    // //   },
    // // });
    // // expect(wrapper).toMatchSnapshot();
    // console.log("I'm bored", wrapper.props().tdoLiRed.TodoList.activities[0]);
    // const wrapper2 = shallow(
    //   <InputBox store={store} isInputBoxValid={formSpy} />
    // ).dive();
    // console.log(wrapper2);
  });
});
