import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { BuyPens } from '../redux/actions/actions'


const KiranaStore = () => {
    const pens=useSelector(state=>state.pens.pens)
    console.log(pens)
   const dispatch = useDispatch()
  
  return (
    <div>
      <h1>PENS:{pens}</h1>
      <button onClick={()=>dispatch(BuyPens())}>BUYPEN</button>
    </div>
  )
}

export default KiranaStore
