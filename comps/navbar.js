
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react'



const Navbar = () => {
  const [newTemp, setNewTemp] = useState('');
	const getWeather = () => {


    const axios = require("axios");

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


		
                const newNewTemp = Math.ceil(data.temp);
               

				setNewTemp(newNewTemp);

        console.log(newNewTemp);
				
			})


            
	};

  useEffect(() => {
    
    getWeather();
  
 }, []);


  return (



    <div className="border-b border-solid border-borderb  mb-12 ">
    <nav className="mt-2.5  mb-2 py-2.5 px-0 flex justify-end items-end container max-w-4xl   mx-auto my-0">
      <div className="mr-auto">
        <Image src="/logo.png" alt="site logo" width={128} height={77}  />
      </div>
            <Link href="/" className="ml-3">Home</Link>
            <Link href="/about" className="ml-3">About</Link>
            <Link href="/weather" className="ml-3">weather</Link>
            <Link href="/students/" className="ml-3">students Listing</Link>

            <div className=" ml-3 mt-10 justify-start bg-indigo-200 px-12 rounded font-raleway text-xl font-semibold text-gray-700 sm:text-base sm:px-8">
              <div className="flex-row">
                <p className="w-20 sm:w-20">Beirut :</p>
                <p>{newTemp} ° C</p>
              </div>
            </div>
      </nav>
      </div>        
     );
}
 
export default Navbar;
