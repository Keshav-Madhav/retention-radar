"use client"

import { 
  Chart,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'; 

import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(
  LinearScale,
  CategoryScale,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartDataLabels
);

import { Pie } from 'react-chartjs-2';

type Props = {
  churndata: churnData
}

const PieChart = ({churndata}: Props ) => {
  // Calculate the total number of exited customers
  const totalExited = churndata.filter(data => data.Exited === 1).length;

  // Calculate the number of exited customers by gender
  const maleExited = churndata.filter(data => data.Exited === 1 && data.Gender === 'Male').length;
  const femaleExited = churndata.filter(data => data.Exited === 1 && data.Gender === 'Female').length;

  console.log('maleExited', maleExited)
  console.log('femaleExited', femaleExited)

  const data = {
    labels: ['Female', 'Male'],
    datasets: [
      {
        label: 'Exited',
        data: [femaleExited, maleExited],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
        title: {
          display: true,
          text: `Total Exited: ${totalExited}`,
        },
        ticks: {
          display: false, // Hide x-axis ticks
        },
      },
      y: {
        grid: {
          display: false, // Hide y-axis grid lines
        },
        beginAtZero: true,
        title: {
          display: false,
        },
        ticks: {
          display: false, // Hide y-axis ticks
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        formatter: (value: number, ctx: any) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data: number) => {
            sum += data;
          });
          let percentage = (value*100 / sum);
          let decimalPart = percentage - Math.floor(percentage);
          if(decimalPart === 0) {
            percentage = Math.floor(percentage);
          } else {
            percentage = parseFloat(percentage.toFixed(1));
          }
          return percentage + "%" + '\n' + value + ' Exited';
        },
        color: '#fff',
        font: {
          size: 9, // You can adjust this value to decrease or increase the font size
        },
      }      
    },
  };

  return (
    <div className='flex flex-col justify-end gap-1 w-full h-full'>
      <div className='flex gap-1 items-center'>
        <div className=' h-3 w-3 bg-[rgba(54,162,235,0.2)] border-2 border-[rgba(54,162,235,1)]'/> <p className='test-sm font-medium text-[rgba(54,162,235,1)]'>Male</p>
        <div className='ml-8 h-3 w-3 bg-[rgba(255,99,132,0.2)] border-2 border-[rgba(255,99,132,1)]'/> <p className='test-sm font-medium text-[rgba(255,99,132,1)]'>Female</p>
      </div>
      <Pie data={data} options={options} />
    </div>
  )
}

export default PieChart
