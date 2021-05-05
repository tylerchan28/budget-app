import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";


test("should render header correctly", () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();
})

test("should call startLogout on button click", () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>)
    wrapper.find("button").simulate("click");
    expect(startLogout).toHaveBeenCalled();
    
})

// first save creates a file in __snapshots__, then future saves compare to first snapshot
// ReactShallowRenderer only renders the component itself, doesn't depend on other things to run