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

const BarChart1 = ({churndata}: Props ) => {

  const ageGroups = ['18-28', '29-35', '36-40', '41-45', '46-52', '53-60', '60-100'];

  // Calculate the total count and exited count for each age group
  const totalCount = ageGroups.map(group => {
    const [start, end] = group.split('-');
    return churndata.filter(data => data.Age >= parseInt(start) && (!end || data.Age <= parseInt(end))).length;
  });
  
  const exitedCount = ageGroups.map(group => {
    const [start, end] = group.split('-');
    return churndata.filter(data => data.Age >= parseInt(start) && (!end || data.Age <= parseInt(end)) && data.Exited === 1).length;
  });
  

  const data = {
    labels: ageGroups,
    datasets: [
      {
        label: 'Total age',
        data: totalCount,
        backgroundColor: colors[3].body,
        borderColor: colors[3].border,
        borderWidth: 1,
      },
      {
        label: 'Exited age',
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
          text: 'Number of people',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)', // This changes the grid line color to white
        },
      },
    },
    maintainAspectRatio: false,
  };
  

  return (
    <div className='w-full h-full'>
      <Bar data={data} options={options}></Bar>
    </div>
  )
}

export default BarChart1
