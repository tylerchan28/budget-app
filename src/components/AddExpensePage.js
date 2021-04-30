import React from "react";
import { connect } from "react-redux"; // need this to call dispatch()
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        this.props.addExpense(expense);
        // dispatched from mapDispatchToProps (must use props.)
        // same functionality as props.dispatch(addExpense(expense)
        this.props.history.push("/"); //switches to dashboard after onSubmit w/ browser routing
    }
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                /> 
            </div> // passes onSubmit prop to ExpenseForm
        )
    }
}



const mapDispatchToProps = (dispatch) => ({
        addExpense: (expense) => dispatch(addExpense(expense))
    })

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

// mapDispatchToProps makes a more testable component
    // functions automatically dispatched when called
    // functions are passed as props to the component