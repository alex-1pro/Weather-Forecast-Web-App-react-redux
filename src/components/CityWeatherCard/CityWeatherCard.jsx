
import React from 'react';
import './CityWeatherCard.css'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
// import { Redirect } from 'react-router';
import { weatherFromFavorites } from '../../redux/actions'


function CityWeatherCard({ cityData }) {
    /**
   *  data: {
              city,
              currentWeather,
              dailyWeather
          }
   */

    //weatherFromFavorites(city, cityKey, currentWeather, dailyWeather)
    const dispatch = useDispatch();
    const { currentWeather, dailyWeather, city, cityKey } = cityData;

    const clickOnCard = () => {
        dispatch(weatherFromFavorites(city, cityKey, currentWeather, dailyWeather));
       //return <Redirect to="/"/>
        window.location.href="#/"
    }

    const icon = () => {
        const iconId = Number(currentWeather[0].weatherIcon) < 10 ? `0${currentWeather[0].weatherIcon}` : currentWeather[0].weatherIcon;
        return `https://developer.accuweather.com/sites/default/files/${iconId}-s.png`
    }



    return (

        <Container fluid className="c-weather-single-card back-ground-color" onClick={clickOnCard}>

            <Row >
                <Col >
                    <div className="single-day-container">
                        <h1>
                            {city}
                        </h1>
                        <div className="container-weather-img">
                            <img className="single-weather-img" src={icon()} />
                        </div>
                        <h1>
                            {currentWeather[0].celsius}&deg;C
                        </h1>
                        <h1>
                            {currentWeather[0].weatherText}
                        </h1>
                    </div>
                </Col>
            </Row>

        </Container>

    );

}

export default CityWeatherCard;