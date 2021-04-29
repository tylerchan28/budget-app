import React from "react";
import { shallow } from "enzyme";
// import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";


test("should render header correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    
    // expect(wrapper.find("h1").text()).toBe("Budget App");
    // const renderer = new ReactShallowRenderer;
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})

// first save creates a file in __snapshots__, then future saves compare to first snapshot
// ReactShallowRenderer only renders the component itself, doesn't depend on other things to run