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
  type: string
}

const BarChart2 = ({churndata, type}: Props ) => {
  const salaryGroups = ['0-15000', '15000-30000', '30000-45000', '45000-60000', '60000-75000', '75000-90000', '90000-105000', '105000-120000', '120000-135000', '135000-150000', '150000-165000', '165000-180000', '180000-195000', '195000-210000'];
  const creditScoreGroups = ['350-400', '400-450', '450-500', '500-550', '550-600', '600-650', '650-700', '700-750', '750-800', '800-850'];
  const tenureGroups = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  // Calculate the total count and exited count for each salary group
  let totalCount : number[] = [];
  let exitedCount : number[] = [];
  
  if(type === 'Credit') {
    totalCount = creditScoreGroups.map(group => {
      const [start, end] = group.split('-');
      return churndata.filter(data => data.CreditScore >= parseInt(start) && data.CreditScore <= parseInt(end)).length;
    });
    
    exitedCount = creditScoreGroups.map(group => {
      const [start, end] = group.split('-');
      return churndata.filter(data => data.CreditScore >= parseInt(start) && data.CreditScore <= parseInt(end) && data.Exited === 1).length;
    });
  } else if(type === 'Salary') {
    totalCount = salaryGroups.map(group => {
      const [start, end] = group.split('-');
      return churndata.filter(data => data.EstimatedSalary >= parseInt(start) && (!end || data.EstimatedSalary <= parseInt(end))).length;
    });
    
    exitedCount = salaryGroups.map(group => {
      const [start, end] = group.split('-');
      return churndata.filter(data => data.EstimatedSalary >= parseInt(start) && (!end || data.EstimatedSalary <= parseInt(end)) && data.Exited === 1).length;
    });
  } else if(type === 'Tenure') {
    totalCount = tenureGroups.map(group => {
      return churndata.filter(data => data.Tenure === parseInt(group)).length;
    });
    
    exitedCount = tenureGroups.map(group => {
      return churndata.filter(data => data.Tenure === parseInt(group) && data.Exited === 1).length;
    });
  }

  const data = {
    labels: type === 'Credit' ? creditScoreGroups : type === 'Salary' ? salaryGroups : tenureGroups,
    datasets: [
      {
        label: `Total ${type === 'Credit' ? 'Credit Score' : type === 'Salary' ? 'Salary' : 'Tenure'}`,
        data: totalCount,
        backgroundColor: colors[3].body,
        borderColor: colors[3].border,
        borderWidth: 1,
      },
      {
        label: `Exited ${type === 'Credit' ? 'Credit Score' : type === 'Salary' ? 'Salary' : 'Tenure'}`,
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
          text: type === 'Credit' ? 'Credit Score' : type === 'Salary' ? 'Salary' : 'Tenure',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)', // This changes the grid line color to white
        },
        stacked: type === 'Salary' || type === 'Tenure' ? true : false,
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
    <div className='h-full w-full'>
      <Bar data={data} options={options}></Bar>
    </div>
  )
}

export default BarChart2
