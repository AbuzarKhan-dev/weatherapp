

const CityName = ({location={}}) => {
  return(
         <div className= 'city_name'>
         <h2>{location?.name}</h2>
         <h2>{location?.country}</h2>
         <h2>{location?.localtime}</h2>
        </div>)   
}



export default CityName;