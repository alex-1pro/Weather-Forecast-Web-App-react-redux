import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Toast } from 'react-bootstrap';
import './HomePage.css'
import { GoLocation } from 'react-icons/go'
import MainCardComponent from '../../components/MainCardComponent/MainCardComponent';
import WeatherSingleCard from '../../components/WeatherSingleCard/WeatherSingleCard';
import { currentGeopostion, autoComplete, dailyForecasts } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';



function HomePage(props) {
    // const [lng, setLng] = useState(0);
    // const [lat, setLat] = useState(0);

    const [textCity, setTextCity] = useState("");

    const dispatch = useDispatch();
    const city = useSelector(state => {

        const { homePageReducer } = state;
        return homePageReducer;
    });





    const weatherDaily = useSelector(state => {
        const { mainCardReducer } = state;
        return mainCardReducer.weatherDaily;
    })
    const unitDegrees = useSelector(state => {
        const { mainCardReducer } = state;
        return mainCardReducer.unitDegrees;
    })



    const handleGetLocation = () => {
        dispatch(currentGeopostion());
    }


    const handleChange = (e) => {
        setTextCity(e.target.value);
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(autoComplete(textCity))
        setTextCity("");
    }

    useEffect(() => {
        dispatch(dailyForecasts(city.cityKey))
    }, [city.cityKey])

    const error = useSelector(state => state.appReducer.error);
    console.log("error ", error);

    const errorToast = <Toast className="d-inline-block m-1" bg="danger" >
        {/* <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Error</strong>
        </Toast.Header> */}
        <Toast.Body >
            {error}
        </Toast.Body>
    </Toast>


    return (
        <div className="p-home">
            {!!error && errorToast}
            <Container fluid>
                <Row className="justify-content-center" >
                    <Col md="auto">
                        <form onSubmit={handleSubmit}>
                            <div className="frame-input">
                                <input className="search-input" type="text" placeholder="The city name" onChange={handleChange} value={textCity} />

                            </div>
                            <input type="submit" hidden />
                        </form>
                    </Col>

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