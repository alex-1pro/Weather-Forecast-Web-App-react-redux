import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CityWeatherCard from '../../components/CityWeatherCard/CityWeatherCard';
import './FavoritesPage.css'

function FavoritesPage(props) {

    const cities = useSelector((state) => {
        const { favoritesPageReducer } = state;
        return favoritesPageReducer.citiesForecasts;
    })

    const citiesCards = cities.map(res => {
        return <Col key={res.cityKey} > <CityWeatherCard cityData={res} /> </Col>
    })



    return (
        <div className="p-favorites">
            <Container fluid className="back-ground-color">
                <Row xs={1} md={3} xxl={5}>
                    {
                        citiesCards.length ? citiesCards :
                            <Col><h1>The list emty yet. </h1></Col>
                    }
                </Row>
            </Container>
        </div>
    );
}

export default FavoritesPage;