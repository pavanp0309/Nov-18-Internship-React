import React from 'react'


const ExpenseSummary = ({totalExpeneses,budget}) => {
    //  calculating the Remaining amount 
   let ReamainingAmount=budget-totalExpeneses

  return (
    <div className='card my-2 shadow'>
        <h3 className='card-title text-success mx-auto fw-bold'>Summary </h3>
      <div className="card-body my-1">
        <p className='card-text text-success fw-bold'>
          <span className='text-secondary fw-bold'>TOTAL EXPENSES:</span>{totalExpeneses.toFixed(2)}
        </p>
        <p className='card-text text-danger fw-bold'><span className='text-secondary fw-bold'>
          REMAINING BUDGET:</span>{ReamainingAmount.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default ExpenseSummary
