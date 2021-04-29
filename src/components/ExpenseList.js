import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => ( // THIS FUNCTION IS WHAT DISPLAYS THE EXPENSES TO SCREEN
    // takes in entire expenses list (as more expenses are added) and transforms to ExpenseListItem
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses.</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
            )
        }

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
