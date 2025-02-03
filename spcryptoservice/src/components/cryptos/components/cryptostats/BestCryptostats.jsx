import React from 'react'
import useCryptostats from '../../hooks/useCryptostats'
import CryptoAreaChart from '../graphs/AreaChart'

const BestCryptostats = () => {
    let {stats,isloading,isError}=useCryptostats()

    if(isloading){
      return <h4>loading..</h4>
    }
    if(isError){
      return <h4>erorr..</h4>
    }
  
    // destructuring the best cryptos
    const {bestCoins=[]}=stats
    console.log("bestcrypto:",bestCoins)
  return (
   <div className="container-fluid ">
     <div className='row gy-3'>
      {
        bestCoins.map((coins)=><CryptoAreaChart  key={coins.uuid} coins={coins} />
       )
      }
    </div> 
   </div>
  )
}

export default BestCryptostats
