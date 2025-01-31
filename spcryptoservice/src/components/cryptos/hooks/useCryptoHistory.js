
import {useGetcryptoHistoryQuery} from "../../cryptos/services/Cryptomarkets"

const useCryptoHistory = (coinId,timePeriod="3m") => {
    const {data,isloading,isError}=useGetcryptoHistoryQuery({coinId,timePeriod})
    let history=data?.data?.history || []

  return {data,isloading,isError,history}
}

export default useCryptoHistory
