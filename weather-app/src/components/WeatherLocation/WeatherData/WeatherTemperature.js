import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW, 
    WINDY
} from './../../../constants/weathers';
import './styles.css';

const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return "wi wi-cloud";
        case CLOUDY:
            return "wi wi-cloudy";
        case SUN:
            return "wi wi-day-sunny";
        case RAIN:
            return "wi wi-rain";
        case SNOW:
            return "wi wi-snow";
        case WINDY:
            return "wi wi-windy";
        default:
            return "wi wi-hot";
    }
};

const getWeatherIcon = weatherState => {
    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="3x" />);
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{`${temperature}` } </span>
        <span className='temperatureType'>Cº</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature; 