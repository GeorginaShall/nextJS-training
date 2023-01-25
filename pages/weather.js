import Head from 'next/head'
import {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react'


const weather = () => {

    const [city, setCity] = useState('');
    const [Seattle, SeattleCity] = useState('Seattle');
	const [temp, setTemp] = useState(null);
	const [minTemp, setMinTemp] = useState('');
	const [maxTemp, setMaxTemp] = useState('');
    const [newTemp, setNewTemp] = useState('');
	const [humidity, setHumidity] = useState('');
	const [windSpeed, setWindSpeed] = useState('0.00');
    const [windDegree, setWindDegree] = useState('');

	const [err, setErr] = useState(false);
	/**
	 *
	 * fetch weather information of the given city
	 */
	const getWeather = () => {
		// resetting states
		setErr(false);
		setTemp(null);

        const options = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: {city: 'Seattle'},
            headers: {
              'X-RapidAPI-Key': 'f18614898dmshffba2b5a13dac2ap19b14cjsn9883e2b2a02f',
              'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
          };
		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				const {data} = response;

                const truecity = (city === Seattle);
                console.log(truecity);

				const newMinTemp = (data.min_temp);
				const newMaxTemp = Math.ceil(data.max_temp);
                const newNewTemp = Math.ceil(data.temp);
                const newHumidity = Math.ceil(data.humidity);
				const newWindSpeed = (data.wind_speed);
                const newWindDegree = Math.ceil(data.wind_degrees);

				setNewTemp(newNewTemp);
				setMinTemp(newMinTemp);
				setMaxTemp(newMaxTemp);
                setHumidity(newHumidity);
				setWindSpeed(newWindSpeed);
				setWindDegree(newWindDegree);

                setTemp(true);


			})
			.catch(function (error) {
				console.error(error);
				setErr(true);
			}), (city === Seattle);

            
	};
    useEffect(() => {
    
            getWeather();
          
         }, []);
     
   useEffect(() => {
    const interval = setInterval(() => {
        getWeather();
       },10000);
       return () => clearInterval(interval);
     }, []);
 


    return ( 
        <>
        <Head>
            <title>students List | About</title>
            <meta name="keywords" content="items"/>
        </Head>

        <div className="flex justify-center items-center flex-col">
			<div>
				<h2 className="font-raleway text-5xl font-extrabold mb-10 sm:text-4xl">
					Weather App
				</h2>
			</div>
			{/* <div className="flex sm:flex-col">
				<input
					type="text"
					placeholder="City..."
					className="outline-indigo mr-6 rounded-sm pl-4 w-64 font-raleway sm:mr-0 sm:mb-4 sm:py-1"
					onChange={e => setCity(e.target.value)}
				/>
				<button
					
					className="outline-none border-none font-bold font-raleway px-12 py-2 rounded-sm bg-indigo-300 text-gray-700 transition duration-300 hover:bg-indigo-600 hover:text-white"
				>
					Search
				</button>
			</div> */}
			{temp && (
				<div className="mt-10 flex flex-col justify-start bg-indigo-200 px-12 py-4 rounded font-raleway text-xl font-semibold text-gray-700 sm:text-base sm:px-8">
					<div className="flex mb-4">
						<p className="w-64 sm:w-41">Temperature:</p>
						<p>{newTemp} ° C</p>
					</div>
					<div className="flex mb-4 sm:w-41">
						<p className="w-64">Temperature Min:</p>
						<p>{minTemp}° C</p>
					</div>
					<div className="flex mb-4 sm:w-41">
						<p className="w-64 sm:w-41">Temperature Max:</p>
						<p>{maxTemp}° C</p>
					</div>
                    <div className="flex mb-4 sm:w-41">
						<p className="w-64 sm:w-41">Humidity:</p>
						<p>{humidity}</p>
					</div>
					<div className="flex mb-4 sm:w-41">
						<p className="w-64">Wind Speed:</p>
						<p>{windSpeed}</p>
					</div>
					<div className="flex">
						<p className="w-64 sm:w-41">Wind Degree:</p>
						<p>{windDegree}</p>
					</div>
				</div>
			)}
			{err && (
				<div className="mt-10 bg-red-200 px-12 py-4 rounded font-raleway text-xl font-semibold text-gray-700 sm:text-base sm:px-8">
					<p>Couldn't fetch weather results.</p>
				</div>
			)}
		</div>
        </>
     );
}
 
export default weather;