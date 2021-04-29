import React from "react";
import { connect } from "react-redux"; // need this to call dispatch()
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push("/"); //switches to dashboard after onSubmit w/ browser routing
            }}
        /> 
    </div> // passes onSubmit prop to ExpenseForm
)

export default connect()(AddExpensePage);