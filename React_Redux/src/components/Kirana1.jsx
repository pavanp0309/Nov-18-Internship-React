import React from 'react'
import { connect } from 'react-redux'
import { BuyPens } from '../redux/actions/actions'


const KiranaStore1 = (props) => {
    console.log(props)
   
  return (
    <div>
      <h1>PENS:</h1>
      <button >BUYPEN</button>
    </div>
  )
}


const mapStateToProps=(state)=>{
   return {
    pens:state.pens.pens
   }
}
const mapDispatchToProps=(dispatch)=>{
    return {
     BuyPens:()=>dispatch(BuyPens())
    }
 }
export default connect(mapStateToProps,mapDispatchToProps)(KiranaStore1) 
