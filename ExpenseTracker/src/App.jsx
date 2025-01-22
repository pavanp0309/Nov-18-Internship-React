import React from "react";
import ExpenseInput from "./components/ExpenseInput";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import useExpensesManger from "./hooks/useExpenses";

const App = () => {


  // custom hook
  let {budget,setBudget,addExpense}=useExpensesManger()
  return (
    <div className="container">
      {/* budget input start */}
      <div class="form-floating my-3">
        <input
          type="text"
          class="form-control"
          id="budget"
          
          onChange={(e) => setBudget(parseFloat(e.target.value)|| 0)}
        />
        <label for="floatingInput">BUDGET</label>
      </div>
      {/* budget input end */}

      {/* expense input */}
      <ExpenseInput  addExpense={addExpense}/>
      {/* search and filter functionality */}
      <div className="card p-2 my-2">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="form-floating my-3">
              <input type="text" className="form-control" id="search" value={""} placeholder="search.." onChange={() => 0}/>
              <label for="search">Search</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 my-auto">
            <div className="form-floating ">
              <select className="form-select" id="floatingSelect" onChange={() => "select"}>
                <option selected>select the category</option>
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
      <ExpenseList/>

      {/* expenses summary */}
      <ExpenseSummary/>
    </div>
  );
};

export default App;
