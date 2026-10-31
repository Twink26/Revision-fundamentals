const expenses = [];

function addExpense(title, amount, category, date) {
    if(typeof title !== "string" || title.trim() === "") {
        throw new Error("Title must be a non-empty string");
    }
    if(typeof amount !== "number" || amount <= 0) {
        throw new Error("Amount must be a positive number");
    }
    const expenses = {
        id: expenses.length + 1,
        title: title.trim(),
        amount: amount,
        category: category,
        date: date,
    };
    expenses.push(expense);
    return expenses;
}

addExpense("Lunch", 250, "food", "2026-10-30");
addExpense("Auto", 80, "travel", "2026-10-30");
addExpense("Movie", 400, "fun", "2026-10-29");

function getTotal(){
    let total = 0;
    for (const expense of expenses) {
        total += expense.amount;
}

return total;

function getExpensesByCategory(category){
    return getByCategory(category).reduce((total, expense) => total + expense.amount, 0);
}


console.log(getTotal());