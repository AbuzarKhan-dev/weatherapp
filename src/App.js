import './App.css';
import HeaderInput from './Input_Section';
import MoreDetails from './More-Details';
import {useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const [Pack,setPack] = useState({});

  useEffect(() =>{
onSearch('islamabad')
  },[])

  const onSearch = (text) => {
  const url = `http://api.weatherstack.com/current?access_key=2c0047de115ed0990375456a565b4683&query=${text}`;
  axios.get(url)
  .then((res) => setPack(res.data))
}

 
 

  return (
    <div className="App">
    <div className='Child_div'>
      <HeaderInput Pack={Pack} onSearch={onSearch}/>
      <MoreDetails current={Pack?.current || {}} />
     </div>
      <div className='child_div_2'>
        
      </div>
    </div>
  );
}

export default App;
