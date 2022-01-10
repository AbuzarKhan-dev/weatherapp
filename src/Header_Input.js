import WeatherImg from "./Image";
import CityName from "./City_Name";
import {BsSearch} from 'react-icons/bs';
import {useState} from 'react';
import { useSelector } from "react-redux";


const HeaderInput = ({onSearch}) => {
       const [text,settext] = useState('');
       const Pack= useSelector(state => state.getData)
       


       const submit = () => {
           onSearch(text)
           settext('')
       }
       
    return (
           
        <div className='update_container'>
         <div className='header_container'>
          <h1 className='main_heading'>Weather Update</h1>
          <div className='input_btn'>
          <input className='input' type = 'text' value={text} onChange = {(e) => settext(e.target.value)} />
          <button className='search_btn' onClick={submit} ><BsSearch/></button>
          </div> 
          {<CityName loc={Pack.data?.location || 'No'}/>}
          {<WeatherImg img={Pack.data?.current || 'No'}/>} 
      </div> 
      </div>
    
    )
}

export default HeaderInput;