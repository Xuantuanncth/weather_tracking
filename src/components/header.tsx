"use client";

import { useState, useEffect } from 'react';
import C_degrees from "@/assets/images/C_degree.svg"
import Place_icon from "@/assets/icon/placeholder.svg"
import Sun_icon from "@/assets/icon/sun.svg"
import Storm_icon from "@/assets/icon/storm.svg"
import Cloudy_and_sun_icon from "@/assets/icon/cloudy_and_sun.svg";

const Header = () => {
    const api_key ="6cbcca9c3089aa83fddf35a73b0aae3d";
    const initial_coordinates = {lat:"21.0228148", lon:"105.7957638"};
    const initial_weatherData = {temperature:0, Status:"rain",Humidity:10,Wind:10,Place:"Da Nang",Icon:"01d"};
    const [weather_data, setWeatherData] = useState(initial_weatherData);
    const [coordinates, setCoordinates] = useState(initial_coordinates);
    const weather_api = "https://api.openweathermap.org/data/2.5/weather?lat="+coordinates.lat+"&lon="+coordinates.lon+"&appid="+api_key+"&&units=metric";
    // const weather_icon = "https://openweathermap.org/img/wn/"+weather_data.Icon+"@4x.png";

    const get_weather_data = async() => {
        const response = await fetch(weather_api).then((response) => response.json());
        console.log("Data: ",response.weather.description);
        setWeatherData({temperature:response.main.temp,Status:response.weather[0].description,Humidity:response.main.humidity,Wind:response.wind.speed,Place:response.name,Icon:response.weather[0].icon});
    };

    useEffect(() =>{
        get_weather_data();
    },[]);

    function updatePlace(){
        console.log("Update place")
    }

    return (
        <div className="w-[1024px] h-[124px] rounded-lg bg-cover bg-[url('../../public/sky_bg.svg')] bg-center">
            <div className="flex">
                <div className="pt-2 pl-[60px]">
                    <img src={"https://openweathermap.org/img/wn/"+weather_data.Icon+"@2x.png"} alt="This is icon weather" className=""/>
                </div>
                <div className="flex pl-[30px] pt-[10px]">
                    <h1 className="text-black font-[400] text-[64px] text-center">{weather_data.temperature}</h1>
                    <img src={C_degrees.src} alt="C degree" className="w-[54px] h-[46px] mt-[10px]" />
                </div>
                <div className="pl-[24px] pt-[24px] text-black font-normal text-[20px]">
                    <h1>Status: {weather_data.Status}</h1>
                    <h1>Humidity: {weather_data.Humidity}%</h1>
                    <h1>Wind: {weather_data.Wind} Km/h</h1>
                </div>
                <div className="flex pl-[202px]">
                    <img src={Place_icon.src} alt="This is place" className="w-8 h-8 mt-[50px]" onClick={updatePlace}/>
                    <h1 className="text-black font-normal text-[32px] pl-4 mt-[40px]">{weather_data.Place}</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;