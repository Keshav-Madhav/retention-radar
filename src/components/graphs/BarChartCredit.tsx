"use client"

import { 
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
 } from 'chart.js'; 

 Chart.register(
  BarElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);
import { Bar } from 'react-chartjs-2';
import { colors } from '@/utils/colors';

type Props = {
  churndata: churnData
}

const BarChartCredit = ({churndata}: Props ) => {
  const creditScoreGroups = ['350-400', '400-450', '450-500', '500-550', '550-600', '600-650', '650-700', '700-750', '750-800', '800-850'];

  // Calculate the total count and exited count for each credit score group
  const totalCount = creditScoreGroups.map(group => {
    const [start, end] = group.split('-');
    return churndata.filter(data => data.CreditScore >= parseInt(start) && data.CreditScore <= parseInt(end)).length;
  });
  
  const exitedCount = creditScoreGroups.map(group => {
    const [start, end] = group.split('-');
    return churndata.filter(data => data.CreditScore >= parseInt(start) && data.CreditScore <= parseInt(end) && data.Exited === 1).length;
  });
  

  const data = {
    labels: creditScoreGroups,
    datasets: [
      {
        label: 'Total Credit Score',
        data: totalCount,
        backgroundColor: colors[3].body,
        borderColor: colors[3].border,
        borderWidth: 1,
      },
      {
        label: 'Exited Credit Score',
        data: exitedCount,
        backgroundColor: colors[5].body,
        borderColor: colors[5].border,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Age group',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)', // This changes the grid line color to white
        },
        // stacked: true,  
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Skills in Demand',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)', // This changes the grid line color to white
        },
      },
    },
    maintainAspectRatio: false,
  };
  

  return (
    <div className='h-full w-full'>
      <Bar data={data} options={options}></Bar>
    </div>
  )
}

export default BarChartCredit
