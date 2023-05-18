import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./AddExpense.css";

const AddExpense = ({ saveExpenseData}) => {
  const saveExpenseDataHandler = (expense) => {
    const newExpense = { ...expense, id: Math.random() };
    saveExpenseData(newExpense)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default AddExpense;
