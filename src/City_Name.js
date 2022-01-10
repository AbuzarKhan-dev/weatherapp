

const CityName = ({loc}) => {
  return(
         <div className= 'city_name'>
         <h2>{loc?.name}</h2>
         <h2>{loc?.country}</h2>
         <h2>{loc?.localtime}</h2>
        </div>
      )   
}



export default CityName;