import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class Form extends React.Component{
    
    render()
    {
        return(
            <form onSubmit = {this.props.getWeather} id ="form">
                <input type ="text" name ="city"  id = "city" placeholder ="Enter City Name here..."/>
                <button  id ="search" onClick = {this.load}>Search</button>
            </form>
        );
    }
};
export default Form;