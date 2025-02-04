import React from 'react'
import CryptoTable from '../components/cryptos/components/cryptables/CryptoTable'
import GlobalcryptoStats from '../components/cryptos/components/cryptostats/GlobalcryptoStats'
import BestCryptostats from '../components/cryptos/components/cryptostats/BestCryptostats'
import CryptoFilterCard from '../components/cryptos/components/cryptostats/CryptoFilterCard'
const LiveMarkerts = () => {
  return (
    <>
     <GlobalcryptoStats/>
    
      <BestCryptostats/>
      <CryptoTable/>
      <CryptoFilterCard/>
    </>
  )
}

export default LiveMarkerts
