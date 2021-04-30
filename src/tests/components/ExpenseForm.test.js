import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test("should render ExpenseForm with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
})

test("should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit", {
        preventDefault: () => { }
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();

}) // need to pass preventDefault by defining fake argument
// since passing in nothing, error should have a message (length > 0)
// one snapshot before change, one after to make sure they match when test case runs

test("should set description on input change", () => {
    const value = "New description";
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("input").at(0).simulate("change", {
        target: { value }
    })
    expect(wrapper.state("description")).toBe(value);
})
// function takes e.target.value, so make sure target.value exists
// at uses index

test("should set note on input change", () => {
    const value = "New note";
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("textarea").simulate("change", {
        target: { value }
    });
    expect(wrapper.state("note")).toBe(value);
})

test("should set amount if valid input", () =>{
    const value = "23.50";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change", {
        target: { value }
    });
    expect(wrapper.state("amount")).toBe(value);
})



test("should not set amount if invalid input", () => {
    const value = "12.122";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change", {
        target: { value }
    });
    expect(wrapper.state("amount")).toBe("");
})

test("should call onSubmit prop for valid form submission", () => {
    const onSubmitSpy = jest.fn(); // creates new spy
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
});
// <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>
    // calling onSubmitSpy with expenses[0]

test("should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now);
    expect(wrapper.state("createdAt")).toEqual(now);
})
// call onDateChange with now

test("should set calendar focused on focus change", () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({ focused });
    expect(wrapper.state("calendarFocused")).toBe(focused);
})