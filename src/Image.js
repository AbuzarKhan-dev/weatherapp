const WeatherImg = ({img}) => {
    return(
        <div className='weather_img'>
        <h2 >{img?.temperature} C<sup>o</sup></h2>
        <img src = {img?.weather_icons} alt='NO'/>
        </div>
    )
}

export default WeatherImg;