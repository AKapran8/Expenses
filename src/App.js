import React from "react";
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/AddExpense/AddExpense";

import "./App.css"

const App = () => {
  const expenses = [
    { date: new Date(2021, 6, 11), title: "Ketchup", price: 12, id: 1 },
    { date: new Date(2022, 8, 12), title: "Potato", price: 2, id: 2 },
    { date: new Date(2023, 5, 4), title: "Banan", price: 8, id: 3 },
  ];

  const saveExpenseData = (expense) => {
    console.log(expense);
  };

  return (
    <div className="App">
      <h1> Simple Title</h1>
      <AddExpense saveExpenseData={saveExpenseData} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
