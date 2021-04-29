import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";
// shallow rendering only renders given component
test("should render header correctly", () => {
    const renderer = new ReactShallowRenderer;
    renderer.render(<Header />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();

    console.log(renderer.getRenderOutput());
})

// first save creates a file in __snapshots__, then future saves compare to first snapshot