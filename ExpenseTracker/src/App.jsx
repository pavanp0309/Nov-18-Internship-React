import React, { useEffect, useState } from "react";
import ExpenseInput from "./components/ExpenseInput";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import useExpensesManger from "./hooks/useExpenses";
import useDebounce from "./hooks/useDebounce";

const App = () => {


  // custom hook
  let {budget,setBudget,addExpense,expenses,totalExpeneses,filter,setFilter,setSearchQuery}=useExpensesManger()
  
  // state to hold the Search Tearm
  const [searchTerm,setSearchTerm]=useState("")
  let searchDebounce=useDebounce(searchTerm,300)
  


  // useEffect Hooks To handle The SideEffects
  useEffect(()=>{
     setSearchQuery(searchDebounce)
  },[searchDebounce,setSearchQuery])



  return (
    <div className="container">
      {/* budget input start */}
      <div className="form-floating my-3">
        <input
          type="text"
          className="form-control"
          id="budget"
          value={budget}
          onChange={(e) => setBudget(parseFloat(e.target.value)|| 0)}
        />
        <label htmlFor="floatingInput">BUDGET</label>
      </div>
      {/* budget input end */}

      {/* expense input */}
      <ExpenseInput  addExpense={addExpense}/>
      {/* search and filter functionality */}
      <div className="card p-2 my-2">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="form-floating my-3">
              <input type="text" className="form-control" id="search"
               placeholder="search.." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}/>
              <label htmlFor="search">Search</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 my-auto">
            <div className="form-floating ">
              <select className="form-select" id="floatingSelect"
               onChange={(e) => setFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="Food">Food</option>
                <option value="Entertaiment">Entertaiment </option>
                <option value="Travel">Travel</option>
                <option value="Hosiptal">Hosiptal</option>
                <option value="other">other</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* expenses list */}
      <ExpenseList expenses={expenses}/>

      {/* expenses summary */}
      <ExpenseSummary totalExpeneses={totalExpeneses} budget={budget}/>
    </div>
  );
};

export default App;
