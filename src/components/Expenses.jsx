import React from "react";
import FormNav from "./FormNav";

const handleSubmit = e => {
  e.preventDefault();
};

const Expenses = props => (
  <div className="tool-section expenses">
    <h2 className="tool-section-title">Where's it going?</h2>
    <p className="tool-section-description">
      Use the form below to enter your daily or weekly expenses, along with
      their category, to help build an overview of your financial obligations.
    </p>

    <form id="expenses-form" onSubmit={handleSubmit} className="input-form">
      <div className="period-select">
        <label htmlFor="period">Time Period </label>
        <select name="period" id="period">
          <option>Daily</option>
          <option>Weekly</option>
        </select>
      </div>
      <div className="expense-list input-list">
        <div className="expense input-item">
          <input type="text" className="expense" placeholder="Expense Amount" />
          <select name="type" id="">
            <option value="One-Time">Housing</option>
            <option value="Salary">Transportation</option>
            <option value="Hourly">Groceries</option>
            <option value="One-Time">Loan Payment</option>
          </select>
          <span className="delete-expense" role="img" aria-label="trash bin">
            🗑
          </span>
        </div>
      </div>
      <span className="add-expense" role="img" aria-label="plus">
        ➕
      </span>
      <FormNav back="/tool/incomes" next="/tool/summary" />
    </form>
  </div>
);
export default Expenses;
