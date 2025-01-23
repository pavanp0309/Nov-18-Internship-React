import {useState} from 'react'

const ExpenseInput = ({addExpense}) => {
  const [name,setName]=useState("")
  const [category,setCategory]=useState("food")
  const [amount,setAmount]=useState("")

//   function to handle the add expenses 
const handleAdd=()=>{
    if(name&&amount){
        addExpense(name, category, amount)
        setName("")
        setAmount("")
    }
}



    return (
        <div className='card p-3'>
            <div className="row">
                <div className=" col-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" 
                        placeholder="enter the budget-name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)} />
                        <label htmlFor="floatingInput">Expense_Name</label>
                    </div>
                </div>
                <div className=" col-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelect" value={category} onChange={(e)=>setCategory(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Food">Food</option>
                            <option value="Entertaiment">Entertaiment </option>
                            <option value="Travel">Travel</option>
                            <option value="Hosiptal">Hosiptal</option>
                            <option value="other">other</option>
                        </select>

                    </div>
                </div>
                <div className=" col-12 col-sm-12 col-md-2 col-lg-2">
                <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="floatingInput" 
                        placeholder="enter the budget-price"
                        value={amount} onChange={(e)=>setAmount(e.target.value)} />
                        <label htmlFor="floatingInput">COST</label>
                    </div>
                </div>
                <div className=" col-12 col-sm-12 col-md-2 col-lg-2">
                    <button className='btn btn-success btn-lg px-5 py-2' onClick={()=>handleAdd()}>ADD</button>
                </div>
            </div>
        </div>
    )
}

export default ExpenseInput
