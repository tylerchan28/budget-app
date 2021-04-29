import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("setup remove expense", () => {
    const action = removeExpense({id: "123abc" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
})

test("setup edit expense", () => {
    const action = editExpense("123", { note: "new Note value"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123",
        updates: {
            note: "new Note value"
        }
    })
})

test("should set up add expense action object with user values", () => {
    const expenseData = {
        description: "Rent",
        amount: 1024,
        createdAt: 1000,
        note: "Last month's rent"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test("should set up add expense action object with default values", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            amount: 0,
            createdAt: 0,
            note: ""
        }
   })
})

// toEqual to compare objects/arrays, checks the properties only
// expect.any(type) just checks for type of variable rather than value