import React from 'react'
import useCryptomarkets from '../../hooks/useCryptomarkets'
import { Table } from "antd";
import millify from "millify";
import useCryptoHistory from '../../hooks/useCryptoHistory';
import LineChart from '../graphs/LineChart';

const CryptoTable = () => {
    let {coins,isloading}=useCryptomarkets()
    console.log("insideComCoins:",coins)
    const columns = [
        {
          title: 'Rank',
          dataIndex: 'rank',
          key: 'rank',
          responsive:["xs","sm","md","lg","xl",'xxl'],
          align:"center",
          
    
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          responsive:["xs","sm","md","lg","xl",'xxl'],
          align:"center",
          render:(text,record)=>(
             <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
             <img src={record.iconUrl} alt="" style={{width:"30px",height:"30px"}} />
              <span>{record.symbol}</span>
             </div>
          )
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          responsive:["xs","sm","md","lg","xl",'xxl'],
          align:"center",
          render:(text,record)=>`$${millify(record.price)}`
        },
        {
            title: 'Total24hv',
            dataIndex: '24hVolume',
            key: '24hVolume',
            responsive:["xs","sm","md","lg","xl",'xxl'],
            align:"center",
            render:(text,record)=>`$${millify(text)}`
          },
          {
            title: 'MarketCap',
            dataIndex: 'marketCap',
            key: 'marketCap',
            responsive:["xs","sm","md","lg","xl",'xxl'],
            align:"center",
            render:(text,record)=>`$${millify(text)}`
          },
          {
            title: 'Change',
            dataIndex: 'change',
            key:  'change',
            responsive:["xs","sm","md","lg","xl",'xxl'],
            align:"center",
            render:(text,record)=>(
                <span style={{color:parseFloat(text)<0?"red":"green"}}>
                   {text}
                </span>
            )
          },
          {
            title: 'Graph',
            dataIndex: 'uuid',
            key:  'uuid',
            responsive:["xs","sm","md","lg","xl",'xxl'],
            align:"center",
            render:(coinId)=><HistoricalData data={coinId} />
          },
      ];

//   function for Creating the Historical data 
 let HistoricalData=({data})=>{
      console.log("Hdata:",data)// data-here is uuid for coins
      const {history,isloading,isError}=useCryptoHistory(data)
      console.log("h:",history)
      if(isloading){
        return <h4>loading..</h4>
      }
      if(isError){
        return <h4>isError...</h4>
      }

      return <LineChart  data={history}/>
 }




  return (
    <div className='container-fluid my-5'>
      <Table dataSource={coins} key={coins.uuid} bordered  columns={columns} loading={isloading} />
    
   
    </div>
  )
}

export default CryptoTable
