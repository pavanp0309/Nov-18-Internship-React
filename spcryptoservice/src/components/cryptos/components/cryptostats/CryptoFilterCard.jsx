import {useState,useEffect} from 'react'
import useCryptomarkets from '../../hooks/useCryptomarkets'
import useCryptoHistory from '../../hooks/useCryptoHistory'
import LineBarChart from '../graphs/LineBarChart'

// define the time Period according to the api details
let TimePeriods=["3h","24h","7d","30d","3m","1y","3y","5y"]

const CryptoFilterCard = () => {
    let [selectTimePeriod,setSelectTimePeriod]=useState("1y")
 
    // fetching the coins from the api to display only few coins
    const {coins,isloading,isError}=useCryptomarkets()

    // filtering only few coins from the obtained data
    let filteredCoins=coins.filter((coin)=>["BTC","XRP" ,"USDT","USDC","LTC","AAVE"].includes(coin.symbol))

    // to keep the tabs active when ever user clicks on it 
    const [activeTabKey,setActiveTabkey]=useState('')

    // geeting the history of each coin selected by user to generate the Graph
    let {history}=useCryptoHistory(activeTabKey,selectTimePeriod)


    // default select the coins as sooon as browser is loaded
    useEffect(()=>{
      if(coins.length>0){
        setActiveTabkey(coins[0].uuid) // selecting the first coin from the coin list
      }
    },[coins])

    // function for Handling the changes in Tabs
    const HandleTabChange=(key)=>(setActiveTabkey(key))
    const HandleTimePeriodChage=(e)=>setSelectTimePeriod(e.target.value)
    // filtering the coind data based on selected tab 
    const SelectedCoin=filteredCoins.find((coin)=>coin.uuid===activeTabKey)

  return (
    <div className='container my-2 p-4  '>
        <div className="card">
        {
            // spinner 
            isloading?(
            <div className='card-body'>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </div>
            // card-filter
            ):(
            <>
                        <div className='card-header d-flex justify-content-between align-items-center'>
             {
                SelectedCoin?(
                <div className=''>
                    <img src={SelectedCoin.iconUrl} alt="" className='mx-2' 
                    style={{width:"30px",height:"30px" ,borderRadius:"50%"}} />
                    <span>{SelectedCoin.symbol}</span>
                </div>):
                (<><h3>Select the coin</h3></>)
             }
             {/* handling the Time Periods */}
             <select class="form-select w-auto" value={selectTimePeriod} onChange={HandleTimePeriodChage}>
               {
                TimePeriods.map((period)=>(
                    <option value={period} key={period}>{period}</option>
                ))
               }
             </select>
            </div>
            {/* tabs for coins */}
            <ul class="nav nav-tabs">
                {
                    filteredCoins.map((coin)=>(
                        <>
                         <li class="nav-item">
                            <button 
                            className={`nav-link ${activeTabKey===coin.uuid?"active":""}`}
                             onClick={()=>HandleTabChange(coin.uuid)}>
                                {coin.symbol}
                            </button>
                         </li>
                        </>
                    ))
                }
            </ul>
            {/* graph content */}
            <div className="card-body " >
                <LineBarChart  data={history}/>
            </div>
            </>
            )
        }
       </div>
    </div>
  )
}

export default CryptoFilterCard
