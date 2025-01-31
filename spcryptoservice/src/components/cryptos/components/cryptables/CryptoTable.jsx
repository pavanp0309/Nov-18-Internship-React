import React from 'react'
import useCryptomarkets from '../../hooks/useCryptomarkets'
import { Table } from "antd";
import millify from "millify";


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
            key:  'graph',
            responsive:["xs","sm","md","lg","xl",'xxl'],
            align:"center",
            render:()=>``
          },
      ];
  return (
    <div className='container'>
      <Table dataSource={coins} key={coins.uuid} bordered  columns={columns} loading={isloading} />
    </div>
  )
}

export default CryptoTable
