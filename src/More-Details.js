import {WiHumidity} from 'react-icons/wi';
import {GiWindyStripes} from 'react-icons/gi';
import {GiWindSlap} from 'react-icons/gi';
import {BsFillCloudsFill} from 'react-icons/bs';
import ResultCard from './result_card';


const MoreDetails = ({current}) => {
    return (
        <div className='details'>
            <ResultCard icon={ <GiWindyStripes size='2.8rem'/>} title="Wind" value={current?.wind_speed} unit="mph"/>
            <ResultCard icon={ <GiWindSlap size='2.8rem'/>} title="Wind" value={current?.pressure} unit="mph"/>
            <ResultCard icon={ <WiHumidity size='3.5rem'/>} title="Wind" value={current?.humidity} unit="mph"/>
            <ResultCard icon={ <BsFillCloudsFill size='3.5rem'/>} title="Wind" value={current?.cloudcover} unit="mph"/>
           
            
        </div>
    )
}

export default MoreDetails;