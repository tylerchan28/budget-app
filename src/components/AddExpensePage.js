import React from "react";
import { connect } from "react-redux"; // need this to call dispatch()
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        this.props.startAddExpense(expense);
        // dispatched from mapDispatchToProps (must use props.)
        // same functionality as props.dispatch(addExpense(expense)
        this.props.history.push("/"); //switches to dashboard after onSubmit w/ browser routing
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">   
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        onSubmit={this.onSubmit}
                    /> 
                </div>
            </div> // passes onSubmit prop to ExpenseForm
        )
    }
}



const mapDispatchToProps = (dispatch) => ({
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    })

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

// mapDispatchToProps makes a more testable component
    // functions automatically dispatched when called
    // functions are passed as props to the component