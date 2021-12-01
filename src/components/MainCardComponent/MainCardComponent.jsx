import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { defaultLoadWeathr } from '../../redux/actions';
import { FaExchangeAlt } from  'react-icons/fa';
import './MainCardComponent.css'

function MainCardComponent({ city }) {


    const [unit, setUnit] = useState("celsius");

    const weather = useSelector(state => {
        const { mainCardReducer } = state;
        return mainCardReducer.weather;
    })
    const cityData = useSelector(state => {
        const { homePageReducer } = state;
        return homePageReducer;
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(defaultLoadWeathr(cityData.cityKey));
    }, [cityData.cityKey]);

    const icon = () => {
        const iconId = Number(weather[0].weatherIcon) < 10 ? `0${weather[0].weatherIcon}` : weather[0].weatherIcon;
        return `https://developer.accuweather.com/sites/default/files/${iconId}-s.png`
    }
    const getDate = () => {
        const date = new Date(weather[0].date.replace(/\T.*/, ""));
        return date.toDateString();
    }

    const changeTemperatureUnit = () => {
        if (unit === "celsius") {
            setUnit("fahrenheit");
        }
        else {
            setUnit("celsius");
        }
    }

    return (

        <div className="c-main-card">
            {!!weather.length && <Container fluid="md">
                <Row>
                    <Col >
                        <h1 className="current-date">{cityData.text}</h1>
                        <h1 className="current-date">{getDate()}</h1>
                    </Col>
                    <Col>
                        <div className="favorites-container">
                            <div className="btn-favorites"><h5>♥ save</h5></div>
                            <div className="btn-favorites" onClick={changeTemperatureUnit}><h5>C <FaExchangeAlt/> F</h5></div>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col>
                        <div className="container-weather-img">
                            <img className="weather-img" src={icon()} />
                        </div>
                    </Col>
                    <Col>
                        {
                            unit === "celsius" ?
                                <h1 className="weather-temperature">{weather[0][unit]}&deg;C</h1> :
                                <h1 className="weather-temperature">{weather[0][unit]}&deg;F</h1>
                        }
                        <h1 className="weather-text">{weather[0].weatherText}</h1>
                    </Col>
                </Row>
            </Container>
            }
        </div>

    );

}

export default MainCardComponent;