import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./AddTransaction.css";

const AddTransaction = () => {
  const [incomeText, setIncomeText] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [expenseText, setExpenseText] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    // Process income transaction
    console.log("Income Text:", incomeText);
    console.log("Income Amount:", incomeAmount);

    const newTransaction = {
      text: incomeText,
      amount: +incomeAmount,
    };

    addTransaction(newTransaction);
    // Reset input fields
    setIncomeText("");
    setIncomeAmount("");
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    // Process income transaction
    console.log("Income Text:", expenseText);
    console.log("Income Amount:", expenseAmount);

    const newTransaction = {
      text: expenseText,
      amount: +-Math.abs(expenseAmount),
    };

    addTransaction(newTransaction);
    // Reset input fields
    setExpenseText("");
    setExpenseAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <div className="transaction-container">
        {/* Income Form */}
        <div className="transaction-form">
          <form onSubmit={handleIncomeSubmit}>
            <div className="form-control">
              <label htmlFor="income-text">Income Text</label>
              <input
                type="text"
                value={incomeText}
                onChange={(e) => setIncomeText(e.target.value)}
                id="income-text"
                placeholder="Enter income text..."
              />
            </div>
            <div className="form-control">
              <label htmlFor="income-amount">Income Amount</label>
              <input
                type="number"
                value={incomeAmount}
                onChange={(e) => setIncomeAmount(e.target.value)}
                id="income-amount"
                placeholder="Enter income amount..."
              />
            </div>
            <button className="btn" type="submit">
              Add Income
            </button>
          </form>
        </div>

        {/* Expense Form */}
        <div className="transaction-form">
          <form onSubmit={handleExpenseSubmit}>
            <div className="form-control">
              <label htmlFor="expense-text">Expense Text</label>
              <input
                type="text"
                value={expenseText}
                onChange={(e) => setExpenseText(e.target.value)}
                id="expense-text"
                placeholder="Enter expense text..."
              />
            </div>
            <div className="form-control">
              <label htmlFor="expense-amount">Expense Amount</label>
              <input
                type="number"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                id="expense-amount"
                placeholder="Enter expense amount..."
              />
            </div>
            <button className="btn" type="submit">
              Add Expense
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTransaction;
