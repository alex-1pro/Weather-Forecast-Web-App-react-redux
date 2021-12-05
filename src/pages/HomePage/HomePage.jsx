import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HomePage.css'
import { GoLocation } from 'react-icons/go'
import MainCardComponent from '../../components/MainCardComponent/MainCardComponent';
import WeatherSingleCard from '../../components/WeatherSingleCard/WeatherSingleCard';
import {  currentGeopostion, autoComplete, dailyForecasts } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';



function HomePage(props) {
    // const [lng, setLng] = useState(0);
    // const [lat, setLat] = useState(0);

    const [textCity, setTextCity] = useState("");

    const dispatch = useDispatch();
    const city = useSelector(state => {
        // console.log("state >>>>", state);
        const { homePageReducer } = state;
        return homePageReducer;
    });


    
    // console.log("currentLocation>>>>>", currentLocation);

    // const {dailyWeather} = useSelector(state => {
    //     const { mainCardReducer } = state;
    //     return mainCardReducer.weatherDaily;
    // })


    const weatherDaily = useSelector(state => {
        const { mainCardReducer } = state;
        return mainCardReducer.weatherDaily;
    })
    const unitDegrees = useSelector(state => {
        const { mainCardReducer } = state;
        return mainCardReducer.unitDegrees;
    })
    console.log("unit degrees >>>>", unitDegrees);

    // const weatherPerDay = dailyWeather.map(day => {
    //     return <Col> <WeatherSingleCard weather={day} /></Col>
    // });

    const handleGetLocation = () => {
        dispatch(currentGeopostion());
    }


    const handleChange = (e) => {
        // console.log("handle text >>", e.target.value);
        // dispatch(inputText(e.target.value));
        setTextCity(e.target.value);
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(inputText(textCity));
        dispatch(autoComplete(textCity))
        setTextCity("");
    }

    useEffect(() => {
        dispatch(dailyForecasts(city.cityKey))
    }, [city.cityKey])

    return (
        <div className="p-home">
            <Container fluid>
            {/* <Row className="justify-content-center" > */}
                <Row className="justify-content-center" >
                    <Col md="auto">
                        <form onSubmit={handleSubmit}>
                            <div className="frame-input">
                                <input className="search-input" type="text" placeholder="The city name" onChange={handleChange} value={textCity} />

                            </div>
                            {/* <h1>{`latitude = ${currentLocation.latitude} longitude = ${currentLocation.longitude}`}</h1> */}
                            <input type="submit" hidden />
                        </form>
                    </Col>
                    {/* <Col md="auto">
                        <div className="location-btn"><GoLocation color="#F05514" onClick={handleGetLocation} /></div>
                    </Col> */}
                </Row>
                <Row >
                    <MainCardComponent city={city.text} />
                </Row>

                <div className="back-ground-color">
                    <Row xs={1} md={3} xxl={5}>

                        {!!weatherDaily && weatherDaily.map(res => {
                            return <Col key={res.dayId}> <WeatherSingleCard weather={res} unitDegrees={unitDegrees} /> </Col>
                        })

                        }
                    </Row>
                </div>

            </Container>
        </div>
    );
}

export default HomePage;