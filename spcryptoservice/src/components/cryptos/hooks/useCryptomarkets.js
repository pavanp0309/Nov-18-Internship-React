import {useGetcryptoMarketsQuery} from "../services/Cryptomarkets"

const useCryptomarkets = () => {
    const {data,isloading,isError}=useGetcryptoMarketsQuery()
    // optional chaining
    let coins=data?.data?.coins || []
    let GlobalStats=data?.data?.stats || {}
    console.log("Coinsdata:",coins)
    console.log("GlobalStatsdata:",GlobalStats)

  return {coins,GlobalStats,isloading,isError}
    

}

export default useCryptomarkets
