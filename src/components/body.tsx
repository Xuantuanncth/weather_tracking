"use client";

import React from 'react';
import Chart from './chart/chartJs';
import { useState, useEffect } from 'react';
import Warning_icon from '@/assets/icon/warning.svg';

const BodyData = () =>{
  const [title, setTitle] = useState({text:"RainFall",label:"Luong mua(mml)"});
  const [type_chart, setTypeChart] = useState('Line')
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title.text,
      },
    },
  };

  const labels = ['0h', '2h', '4h', '6h', '8h', '10h', '12h'];

  const data = {
    labels,
    datasets: [
      {
        label: title.label,
        data: labels.map(() => Math.floor(Math.random() * 100)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

    // function updateState() {
    //   setTitle();
    // }

    return (
        <div className='w-[1024px] h-[525px] bg-[#EFEFEF80] mt-[20px] rounded-lg flex'>
            <div className='w-[175px] h-[482px] bg-white mt-[21px] ml-[24px] text-black text-[20px] font-normal' >
                <button className='w-[153px] h-[47px] bg-[#95D9EECC] rounded-lg ml-[11px] my-[20px]' onClick={() => setTitle({text:"RainFall",label:"Luong Mua (mml)"})}>Rainfall</button>
                <button className='w-[153px] h-[47px] bg-[#95D9EECC] rounded-lg ml-[11px] mb-[20px]' onClick={() => setTitle({text:"WaterFlow",label:"Luu Luong Nuoc (mml)"})}>Water Flow</button>
                <button className='w-[153px] h-[47px] bg-[#95D9EECC] rounded-lg ml-[11px]' onClick={() => setTypeChart(type_chart==='Line'?"Bar":"Line")}>Table</button>
            </div>
            <div className='w-[770px] h-[482px] bg-white mt-[21px] ml-[28px]'>
                <Chart data={data} type={type_chart} options={options}></Chart>
            </div>
        </div>
    )
};

export default BodyData;