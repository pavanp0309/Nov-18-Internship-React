import { useMemo, useCallback, useState } from "react";

const useExpensesManger = (initialBudget = 1000) => {
  const [budget, setBudget] = useState(initialBudget); // used for Tracking the budget
  const [expenses, setExpenses] = useState([]); // used for Tracking the Expeneses dynamically
  const [searchQuery, setSearchQuery] = useState(""); //used for tracking the search values given by user
  const [filter, setFilter] = useState("all"); //used for tracking the select dropdown filter
  //  usecallback hook to check weather user has entered the same expenses or not
  const addExpense = useCallback((name, category, amount) => {
    setExpenses((prev) => [
      ...prev,
      { id: Date.now(), name, category, amount: parseFloat(amount) },
    ]);
  }, []);

  //   useMemo hook to prevent re-render when user is search the same value {query } again
  let filterExpenses = useMemo(() => {
    return expenses
      .filter((expense) =>
        expense.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter((expense) =>
        filter === "All" ? true : expense.category === filter
      );
  }, [expenses, filter, searchQuery]);

  //   calculating the Total Expenses
  let totalExpeneses = useMemo(() => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  }, [expenses]);

  return {
    budget,
    setBudget,
    searchQuery,
    setSearchQuery,
    filter,
    setFilter,
    expenses,
    setExpenses,
    addExpense,
    filterExpenses,
    totalExpeneses,
  };
};

export default useExpensesManger;
