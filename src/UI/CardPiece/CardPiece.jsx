import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

import './CardPiece.css'

const CardPiece = (props) => {
    return (
        <div id={props.id} className='card-piece'>
            <Card style={{width: '18rem', position: 'relative'}}>
                <Card.Img variant="top" src={props.src}/>
                <Card.Body>
                    <Card.Title>
                        {props.fromSW
                            ?''
                            :props.id
                        }
                    </Card.Title>
                    <Card.Text className="truncate-text">
                        {props.title}
                    </Card.Text>
                    <Button className="card-piece__hover-btn" variant="primary">
                        {props.fromSW
                            ?<Link id='sw' to={`/card/${props.id}`}>More</Link>
                            :<Link id='ph' to={`/photo/${props.id}`}>More</Link>
                        }
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardPiece;
