import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import BuyChips from '../redux/actions/actions'

const Cake = () => {
    const cakes=useSelector(state=>state.cakes.cakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>{cakes}</h1>
      <button onClick={()=>dispatch(BuyChips())}>buy</button>
    </div>
  )
}

export default Cake
