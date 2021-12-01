import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HomePage.css'
import { GoLocation } from 'react-icons/go'
import MainCardComponent from '../../components/MainCardComponent/MainCardComponent';
import WeatherSingleCard from '../../components/WeatherSingleCard/WeatherSingleCard';
import { inputText, getCurrentLocation, autoComplete } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';



function HomePage(props) {
    // const [lng, setLng] = useState(0);
    // const [lat, setLat] = useState(0);

    const [textCity, setTextCity] = useState("");

    const dispath = useDispatch();
    const city = useSelector(state => {
        // console.log("state >>>>", state);
        const { homePageReducer } = state;
        return homePageReducer.text;
    })


    const currentLocation = useSelector(state => {
        console.log("state >>>>", state);
        const { homePageReducer } = state;

        return homePageReducer.location;
    })
    console.log("currentLocation>>>>>", currentLocation);


    const handleGetLocation = () => {
        dispath(getCurrentLocation());
    }

   
    const handleChange = (e) => {
        // console.log("handle text >>", e.target.value);
        // dispath(inputText(e.target.value));
        setTextCity(e.target.value);
    }



    // function getLocation() {
    //     if (!navigator.geolocation) {
    //         // setStatus("Geolocation is'nt support in your browser");
    //         console.log("Geolocation is'nt support in your browser");
    //     } else {
    //         // setStatus("Locating...");
    //         navigator.geolocation.getCurrentPosition((position) => {
    //             // setStatus(null);
    //             setLat(position.coords.latitude);
    //             setLng(position.coords.longitude);
    //             // }, () => {
    //             // setStatus("Unable to retrieve your location");
    //         })
    //     }
    // }

    // function check() {
    //     getLocation();
    // }
    // console.log(`Lat = ${lat} Lng = ${lng}`);

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispath(inputText(textCity));
            dispath(autoComplete(textCity))
        setTextCity("");
    }

    return (
        <div className="p-home">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <form onSubmit={handleSubmit}>
                            <div className="frame-input">
                                <input className="search-input" type="text" placeholder="The city name" onChange={handleChange} value={textCity}/>
                            </div>
                            {/* <h1>{`latitude = ${currentLocation.latitude} longitude = ${currentLocation.longitude}`}</h1> */}
                            <input type="submit" hidden />
                        </form>
                    </Col>
                    <Col md="auto">
                        <div className="location-btn"><GoLocation color="#F05514" onClick={handleGetLocation} /></div>
                    </Col>
                </Row>
                <MainCardComponent city={city}/>
                {/* <WeatherSingleCard /> */}
            </Container>
        </div>
    );
}

export default HomePage;