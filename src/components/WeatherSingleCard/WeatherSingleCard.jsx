
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WeatherSingleCard.css';


function WeatherSingleCard({ weather,unitDegrees }) {
    const { weatherDay,
        weatherNight,
        celsiusMin,
        celsiusMax,
        fahrenheitMin, 
        fahrenheitMax,
        date } = weather;

   

    const [isDay, setIsDay] = useState("weatherDay");

    useEffect(() => {
        const date = new Date();
        if (date.getHours() >= 17){
            setIsDay("weatherNight");
        }

    }, []);

    const icon = () => {
        const accuWeatherIcons = "https://developer.accuweather.com/sites/default/files/"
            const iconId = Number(weather[isDay].Icon) < 10 ? `0${weather[isDay].Icon}` : weather[isDay].Icon;
            return `${accuWeatherIcons}${iconId}-s.png`;
    }
    
    const getDate = () => {
        const day = new Date(date);
        return day.toDateString();
    }
    
    const temperature  = () =>  unitDegrees === "C"?<h1> {celsiusMin}&deg;C~{celsiusMax}&deg;C</h1> : <h1> {fahrenheitMin}&deg;F~{fahrenheitMax}&deg;F</h1>  
    
    return (
            <Container fluid className="c-weather-single-card back-ground-color">
                <Row >
                    <Col >
                        <div className="single-day-container">
                            <h1>
                            {getDate()}
                            </h1>
                             <div className="container-weather-img">
                                <img className="single-weather-img" src={icon()} />
                          </div> 
                            {temperature()}
                        </div>
                    </Col>
                </Row>
            </Container>
       
    );
}

export default WeatherSingleCard;