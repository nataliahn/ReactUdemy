import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN} from './../../constants/weathers';
import './styles.css';

const location = "London";
const api_key = "4562a91e5a88f90c5c15ba8549f7530d";
const api_weather = `http//api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;
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

    handleUpdateClick = () => {
        fetch(api_weather);
        // this.setState({
        //     data: data2
        // });
        // console.log("actualizando..");
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