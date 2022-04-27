import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

import './Card.css'

const CardPiece = (props) => {
    return (
        <div id={props.id} className='card-piece'>
            <Card style={{width: '18rem', position: 'relative'}}>
                <Card.Img variant="top" src={props.src}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.title}</Card.Text>
                    <Button className="card-peace__hover-btn" variant="primary">
                        <Link to={`/card/${props.id}`}>More</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardPiece;
