import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN} from './../../constants/weathers';
import './styles.css';

const location = "Temuco, cl";
const api_key = "4562a91e5a88f90c5c15ba8549f7530d";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;
const data1 = {
    temperature : 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'WallMapu!',
            data: data1, 
        };
    }
    getWeatherState = weather => {
        return SUN;
    }
    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(this.weather);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        }

        return data;
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( data => {
            console.log(data);
            return data.json();
        }).then(weather_data => {
            debugger;
            const data = this.getDat(weather_data);
            this.setState({ data });
        });
    }

    render = () => {
        const { city, data } = this.state;
        return (
        <div className='weatherLocationCont'>
            <Location city = {city} />
            <WeatherData data={data}/>
            <button onClick={this.handleUpdateClick} >Actualizar</button>    
        </div>);
    };

};

export default WeatherLocation;