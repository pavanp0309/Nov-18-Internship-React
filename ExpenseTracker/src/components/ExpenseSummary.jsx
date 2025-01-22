import React from 'react'
import useExpensesManger from '../hooks/useExpenses'

const ExpenseSummary = () => {
    let {budget}=useExpensesManger()
  return (
    <div className='card my-2 shadow'>
        <h3 className='card-title text-success mx-auto fw-bold'>Summary </h3>
      <div className="card-body my-1">
        <p className='card-text text-success fw-bold'><span className='text-secondary fw-bold'>TOTAL EXPENSES:</span>{10}</p>
        <p className='card-text text-danger fw-bold'><span className='text-secondary fw-bold'>REMAINING BUDGET:</span>{budget}</p>
      </div>
    </div>
  )
}

export default ExpenseSummary
