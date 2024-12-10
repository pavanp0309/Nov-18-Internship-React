import React from 'react'

const Home = ({user="guest",id="🤛🌹"}) => {
    // console.log(props)
    // 2.Through Distructring method
    // const {user="guest"}=props
    
  return (
    <div>
      <h1>{id}{user}</h1>
    </div>
  )
}

export default Home

// // 1.Default Props 
// Home.defaultProps={
//     user:"Guest",
    //    id:"✌✌"
// }