import React from 'react'
import { Card } from "antd";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
const cardinal = curveCardinal.tension(0.2);
import useCryptoHistory from '../../hooks/useCryptoHistory';
import styles from "../../../../styles/AreaChart.module.css"

const CryptoAreaChart = ({coins}) => {
    console.log("coins",coins)
    const {uuid:coinId,name,symbol,iconUrl}=coins 
    // passing the coinId to get the History of every coins 
    const {history,isloading,isError}=useCryptoHistory(coinId)
 console.log(history)

 if(isloading){
    return <h4>loading..</h4>
 }
 if(isError){
    return <h4>isError..</h4>
 }
//  preparing the data for the chart
 let CoinHistory=history.map((point)=>(
    {
        date:new Date(point.timestamp*1000).toLocaleDateString(),
        price:point.price
    }
 ))

//  generating the colors based on prices
let fistPrice=CoinHistory[0]?.price
let lastPrice=CoinHistory[CoinHistory.length-1]?.price
let color=fistPrice>=lastPrice?"green":"red"
let strokecolor=fistPrice>=lastPrice?"Orange":"yellow"
    
  return (
    <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
      <div   className='card border border-success shadow p-3 placeholder-glow' id={styles.areachartcard} >
        <h5 className='card-title  p-2 border-bottom border-warning'>
             <img src={iconUrl} alt="" width={"30px"} height={"30px"} style={{borderRadius:"50%"}} />
             <span className='ms-2'>{name}</span>
             <span className='ms-2'>{symbol}</span>
             </h5>
      <ResponsiveContainer >
        <AreaChart
        data={CoinHistory}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="date" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke={strokecolor} fill={color} fillOpacity={0.5} />
          <Area type={cardinal} dataKey="price" stroke={strokecolor} fill={color} fillOpacity={0.5} />
        </AreaChart>
      </ResponsiveContainer>
      </div>

    </div>
  )
}

export default CryptoAreaChart
