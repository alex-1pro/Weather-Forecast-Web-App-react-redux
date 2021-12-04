import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CityWeatherCard from '../../components/CityWeatherCard/CityWeatherCard';
// import CityWeatherCard from '../../components/CityWeatherCard/CityWeatherCard';
// import { favoritesPageReducer } from '../../redux/favoritesPageReducer';
import { weatherFromFavorites } from '../../redux/actions'



import './FavoritesPage.css'

function FavoritesPage(props) {

    /**
 *  data: {
            city,
            currentWeather,
            dailyWeather
        }
 */
    
    const cities = useSelector((state) => {
        const { favoritesPageReducer } = state;
        return favoritesPageReducer.citiesForecasts;
    })
    
    const citiesCards = cities.map(res => {
        return <Col key={res.cityKey} > <CityWeatherCard cityData={res}/> </Col>
    })

    // return (

    //   <Container fluid className="p-home">

    //     <div className="next-5-days">
    //         <h2 className="next-5-days__heading">Next 5 days</h2>
    //         <div className="next-5-days__container">

    //             <div className="next-5-days__row">

    //                 <div className="next-5-days__date">
    //                     Tue
    //                     <div className="next-5-days__label">30/7</div>
    //                 </div>

    //                 <div className="next-5-days__low">
    //                     10&deg;
    //                     <div className="next-5-days__label">Low</div>
    //                 </div>

    //                 <div className="next-5-days__high">
    //                     21&deg;
    //                     <div className="next-5-days__label">High</div>
    //                 </div>

    //                 {/* <div className="next-5-days__icon">
    //       <img src="icons/sunny.svg" alt="Sunny">
    //     </div> */}

    //                 <div className="next-5-days__rain">
    //                     0%
    //                     <div className="next-5-days__label">Rain</div>
    //                 </div>

    //                 <div className="next-5-days__wind">
    //                     12mph
    //                     <div className="next-5-days__label">Wind</div>
    //                 </div>

    //             </div>
    //             <div className="next-5-days__row">
    //             </div>
    //         </div>
    //         </div>

    //         </Container>   
    //         );

    return (
        <Container>
            <Row xs={1} md={3} xxl={5}>
                {citiesCards}
            </Row>
        </Container>

    );
}

export default FavoritesPage;