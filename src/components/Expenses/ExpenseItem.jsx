import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ date,title, price }) => {
  const [titleValue, setTitleValue] = useState(title);

  const changeTitleHandler = () => {
    setTitleValue('NEW TITLE')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titleValue}</h2>
        <Card className="expense-item__price">${price}</Card>
        <button onClick={changeTitleHandler} >Change title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
