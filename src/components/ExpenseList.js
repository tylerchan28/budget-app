import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => ( // THIS FUNCTION IS WHAT DISPLAYS THE EXPENSES TO SCREEN
    // takes in entire expenses list (as more expenses are added) and transforms to ExpenseListItem
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div>
                        <span className="list-item list-item--message">No expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                )
            }
        </div>
    </div>
);
// {...expenses} takes k/v from expense and passes it as props

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
// API ruires to call connect()(component)
// connects component to Redux store
// as store changes, values update in component (props.filters.text, props.expenses.length)
