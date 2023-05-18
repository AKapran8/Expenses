import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterByYear = (year) => {
    setFilteredYear(year);
    console.log(filteredYear);
  };
  return (
    <>
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterByYear}
      />
      <Card className="expenses">

        {expenses.map((expense) => (
          <ExpenseItem
            date={expense.date}
            title={expense.title}
            price={expense.price}
            key={expense.id}
          />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
