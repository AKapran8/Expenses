import React, { useState } from "react";
import "./ExpenseForm.css";
import { getCurrentDate, getMinDate } from "./getDate";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const maxDate = getCurrentDate();
  const minDate = getMinDate();

  const _titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const _amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const _dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) {
      return;
    }

    const expense = {
      title,
      amount,
      date,
    };
		onSaveExpenseData(expense);
		setTitle('');
		setAmount(0);
		setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={_titleChangeHandler} value={title} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={_amountChangeHandler}
            value={amount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={_dateChangeHandler}
            value={date}
            min={minDate}
            max={maxDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
