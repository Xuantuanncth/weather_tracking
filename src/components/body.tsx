"use client";

import React from 'react';
import Chart from './chart/chartJs';
import { useState, useEffect } from 'react';
import Warning_icon from '@/assets/icon/warning.svg';

const BodyData = () => {
    const [title, setTitle] = useState({ text: "RainFall", label: "Luong mua(mml)" });
    const [type_chart, setTypeChart] = useState('Line');
    const [rainfall, setRainfall] = useState(['123','123','123','123','123','123','123','123','123','123','123']);
    const [waterFlow, setWaterFlow] = useState();
    const [isRainFall, setIsRainFall] = useState(1);

    //Firebase api for rain fall and waterfall
    const rainFall_api = "https://rain-fall-2dd0a-default-rtdb.firebaseio.com/luong_mua.json";
    const WaterFlow_api = "https://rain-fall-2dd0a-default-rtdb.firebaseio.com/luong_mua.json";

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

    const labels = ['0h', '2h', '4h', '6h', '8h', '10h', '12h', '14h', '16h', '18h', '20h'];

    const data = {
        labels,
        datasets: [
            {
                label: title.label,
                data: isRainFall?rainfall:waterFlow,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    const getDataFromFirebase = async()=> {
        const rainFall_response = await fetch(rainFall_api).then((response) => response.json());
        setRainfall(rainFall_response.filter(value => value !== null));
        const waterFlow_response = await fetch(WaterFlow_api).then((response) => response.json());
        setRainfall(waterFlow_response.filter(value => value !== null));
    }

    useEffect(() =>{
        getDataFromFirebase();
    },[]);

    return (
        <div className='w-[1024px] h-[525px] bg-[#EFEFEF80] mt-[20px] rounded-lg flex'>
            <div className='w-[175px] h-[482px] bg-white mt-[21px] ml-[24px] text-black text-[20px] font-normal' >
                <button className='w-[153px] h-[47px] bg-[#95D9EECC] rounded-lg ml-[11px] my-[20px]' onClick={() => {setTitle({ text: "RainFall", label: "Luong Mua (mml)" }); setIsRainFall(1);getDataFromFirebase()}}>Rainfall</button>
                <button className='w-[153px] h-[47px] bg-[#95D9EECC] rounded-lg ml-[11px] mb-[20px]' onClick={() => {setTitle({ text: "WaterFlow", label: "Luu Luong Nuoc (mml)" }); setIsRainFall(0);getDataFromFirebase()}}>Water Flow</button>
                <button className='w-[153px] h-[47px] bg-[#95D9EECC] rounded-lg ml-[11px]' onClick={() => setTypeChart(type_chart === 'Line' ? "Bar" : "Line")}>Table</button>
            </div>
            <div className='w-[770px] h-[482px] bg-white mt-[21px] ml-[28px]'>
                <Chart data={data} type={type_chart} options={options}></Chart>
            </div>
        </div>
    )
};

export default BodyData;