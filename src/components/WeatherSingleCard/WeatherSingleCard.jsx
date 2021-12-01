import React from 'react';
import { Card, Button } from 'react-bootstrap';

function WeatherSingleCard(props) {
    return (
        <div>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Img variant="top" src="https://i.pinimg.com/474x/24/a6/3a/24a63abe3d7b0b34ae34b22781a7972c.jpg/100px180" />
                    {/* <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>
        </div>
    );
}

export default WeatherSingleCard;