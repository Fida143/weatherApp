import { useState } from 'react'
import './LandingPage.css'
import {BsSearch,BsFillCloudSunFill} from 'react-icons/bs'
import {FaWind} from 'react-icons/fa'
import {WiHumidity,WiTime3} from 'react-icons/wi'

// ************************************************************************

function LandingPage({res,city}){

    console.log(res,"lan");
 
    const [input,setInput] = useState('');

    function handleChange (e){
        e.stopPropagation();
        console.log(e.target.value);
        setInput(e.target.value);
    }
    function handleSubmit(e){
        e.stopPropagation();
        e.preventDefault();
        city(`${input}`);
        setInput('');
        
    }
return(
    <>
    {/* <div> */}
    <h1>Weathe App <BsFillCloudSunFill /></h1>
        <div className="container">
            <div className="search">
            <input type="text" placeholder="Enter your City..." onChange={handleChange} value={input}/>
            <button onClick={handleSubmit}><BsSearch /></button>
            </div>
            {res==null?" ":
            <div className={`result ${res.current.is_day==0?'night':'day'}`}>
                <div className='deg'>{res.current.temp_c}°</div>
                <div className='city'>{res.location.name}</div>
                <div className='condition'>{res.current.condition.text} <img src={res.current.condition.icon} alt="" /></div>
                <div className='more-result'>
                    <div className='more-result-left'>
                        Humidity: <WiHumidity className='icon'/>{res.current.humidity} <br />
                        Wind-Kph : <FaWind className='icon'/> {res.current.wind_kph} <br />
                        Pressure: {res.current.pressure_in}
                    </div>
                    <div className='more-result-right'>
                        <div>Lat: {res.location.lat} | Long: {res.location.lon}</div>
                        <div><WiTime3  className='icon'/> {res.location.localtime}</div>
                    </div>
                </div>
            </div>}
            
        </div>
    {/* </div> */}
    </>
);
}
export default LandingPage;