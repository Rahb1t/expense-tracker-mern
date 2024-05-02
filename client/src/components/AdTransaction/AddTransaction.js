import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Modal from "react-modal";
import "./AddTransaction.css";

Modal.setAppElement(document.getElementById("root"));

const AddTransaction = () => {
  const [incomeText, setIncomeText] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [expenseText, setExpenseText] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

    // Close the modal
    setModalIsOpen(false);
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

    // Close the modal
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      height: "50%",
    },
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <div className="transaction-container">
        {/* Income Form */}
        <div>
          <button className="btn-income" onClick={() => setModalIsOpen(true)}>
            Add Income
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles}
            contentLabel="Add Income"
          >
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
                  Submit
                </button>
              </form>
            </div>
          </Modal>
        </div>

        {/* Expense Form */}
        <div>
          <button className="btn-expense" onClick={() => setModalIsOpen(true)}>
            Add Expense
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles}
            contentLabel="Add Expense"
          >
            <div className="transaction-form">
              <form onSubmit={handleExpenseSubmit}>
                <div className="form-control">
                  <label htmlFor="income-text">Expense Text</label>
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
                  Submit
                </button>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AddTransaction;
