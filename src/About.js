import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const About = () =>{
   const Pack = useSelector(state => state.getData)
  
    return (
       <div>
           <h1 style={{color:'red'}}>City Name: {Pack.data.location?.name}</h1>
           <h2>Current Temp: {Pack.data.current?.temperature}</h2>
           <h2>Wind Speed: {Pack.data.current?.wind_speed} </h2>
           <h2>Wind Pressure: {Pack.data.current?.wind_pressure} </h2>
           <h2>Humidity: {Pack.data.current?.humidity} </h2>
           <h2>Cloud Cover: {Pack.data.current?.cloudcover} </h2>
           <p>Go back to see weather app</p>
           <Link to="/weatherapp">Go back</Link>
       </div>

    )
}

export default About;