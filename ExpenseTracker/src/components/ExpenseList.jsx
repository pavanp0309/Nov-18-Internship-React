import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="card p-3 shadow ">
      <ul className="list-group">
        {expenses.map((expense) => (
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            key={expense.id}
          >
            <span class="text-success">{expense.name}</span>
            <span class="badge bg-warning rounded-pill px-3">
              {" "}
              <span class="badge bg-success rounded-pill px-2 mx-1">
                {expense.category}
              </span>
              {expense.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
