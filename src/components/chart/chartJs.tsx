"use client";

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend );

const Chart = ({data,options,type}:{data:any; options:any; type:string}) => {

  if (type === 'Line') {
    return <Line data={data} options={options} />;
  }
  return <Bar data={data} options={options} />;
}

export default Chart;
