import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, price }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <Card className="expense-item__price">${price}</Card>
      </div>
    </Card>
  );
};

export default ExpenseItem;
