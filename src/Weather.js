import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class Weather extends React.Component{
    render()
    {
        return(
           <div>
        <div className ="A">
               {this.props.cityname &&  this.props.country &&  this.props.time && <p>{this.props.cityname}, {this.props.country},
               {this.props.time}</p>}</div>
               <div className ="B">
                   <div className ="temp">
   {this.props.temperature &&  this.props.icon && <p><span className ="celcius">{this.props.temperature}&#8451;
  </span> <img src ={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="wthr img"  width="60" height="60"/></p>}
   </div>
   <div className ="wind">
   {this.props.weather && this.props.wind &&<p>Weather: {this.props.weather}<br/>
   Wind: {this.props.wind} km/hr </p>}
  { this.props.humidity && this.props.pressure && <p> Humidity: {this.props.humidity}%
  <br/>Pressure: {this.props.pressure} pa</p>}
   {this.props.Maxtemp && this.props.Mintemp &&  <p> Max Temp: {this.props.Maxtemp}&#8451; 
   <br/>Min Temp: {this.props.Mintemp}&#8451;</p>}
    {this.props.sunrise && this.props.sunset &&  <p>Sunrise: {this.props.sunrise}
    <br/>sunset: {this.props.sunset}</p>}
    {this.props.error && <p className="error">{this.props.error}</p>}
    </div>
</div>
    </div>
        );
    }
};
export default Weather;