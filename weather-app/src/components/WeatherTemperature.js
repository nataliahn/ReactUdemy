import React from 'react';
import WeatherIcons from 'react-weathericons';

const getWeatherIcon = weatherState => {
    switch (weatherState) {
        case "cloud":
            return (<WeatherIcons name="cloud" size="2x"/>);
        default:
            return (<WeatherIcons name="wi wi-day-rain" size="2x"/>);
    }
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} Cº` } </span>
    </div>
);

export default WeatherTemperature; 