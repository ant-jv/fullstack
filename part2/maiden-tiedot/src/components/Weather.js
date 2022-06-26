import axios from 'axios'
import { useState, useEffect } from 'react'

const Weather = ({lat, lon}) => {

    const [temperature, setTemperature] = useState()
    const [weatherImage, setWeatherImage] = useState()
    const [windSpeed, setWindSpeed] = useState()

    const api_key = process.env.REACT_APP_API_KEY
    
    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
            .then(response => {
                setTemperature(response.data.main.temp)
                setWeatherImage("http://openweathermap.org/img/wn/"+response.data.weather[0].icon+".png")
                setWindSpeed(response.data.wind.speed)
            })
        }, [lat, lon, api_key])

    return (
        <div>
            temperature {temperature} Celsius <br />
            <img src={weatherImage} alt={weatherImage} /><br />
            wind {windSpeed} m/s
        </div>
    )
    
}

export default Weather

