import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    scales,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


  
  const LineChart = ({data}) => {
    console.log("ldata",data)
    const chartData = {
        labels:data.map((item)=>new Date(item.timestamp*1000).toLocaleTimeString()),
        datasets: [
          {
            label: 'Price',
            data: data.map((item) =>parseFloat(item.price) ),
            borderColor:data.map((item) =>{
              let price=parseFloat(item.price)
              if(price<6.5)return "red"
              if(price>6.5)return "green"
              return "orange"
            }),
            backgroundColor:data.map((item) =>{
              let price=parseFloat(item.price)
              if(price<6.5)return "red"
              if(price>6.5)return "green"
               return "blue"
            }),
            fill:false,
            pointRadius:0,
            borderWidth:2,
            lineTension:.1
          },
        ],
      };
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false, 
          },
        },
        scales:{
          x:{
            display:false,
          },
          y:{
            display:false
          }
        }
      };
    return (
      <div style={{width:"100%",height:50}}>
        <Line  options={options} data={chartData} />
      </div>
    )
  }
  
  export default LineChart
  