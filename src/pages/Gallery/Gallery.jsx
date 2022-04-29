import React, {useEffect, useState} from 'react';
import {Spinner, Tab, Tabs} from "react-bootstrap";

import './Gallery.css'
import CardBlockPhoto from "../../UI/CardBlock/CardBlockPhoto";
import CardBlockSW from "../../UI/CardBlock/CardBlockSW";
import PhotoService from "../../API/fetch";

const Gallery = () => {

    const [photos, setPhotos] = useState([])
    const [cardSW, setCardSW] = useState([])

    async function fetchSW() {
        const responseSW = await PhotoService.getAll();
        setTimeout(() => {
            if (responseSW?.data) {
                setCardSW(responseSW.data.results)
            }
        }, 2000)
    }

    async function fetchPhotos() {
        const responsePhoto = await PhotoService.getPhotos();
        setTimeout(() => {
            if (responsePhoto?.data) {
                setPhotos(responsePhoto.data)
            }
        }, 2000)

    }

    useEffect(() => {
        fetchSW();
        fetchPhotos();
    }, []);

    return (
        <div className='gallery-wrapper'>
            {/*<button onClick={fetchPhotos}>manually get fetch</button>*/}
            <Tabs defaultActiveKey="StarWars-1" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="PhotoPack-1" title="PhotoPack 1">
                    {photos.length === 0
                        ? <Spinner className='loading-spinner' animation="border" variant="primary"/>
                        : <CardBlockPhoto items={photos} id={1} toView={[0, 1, 2, 3, 4, 5]}/>
                    }
                </Tab>
                <Tab eventKey="PhotoPack-2" title="PhotoPack 2">
                    {photos.length === 0
                        ? <Spinner className='loading-spinner' animation="border" variant="primary"/>
                        : <CardBlockPhoto items={photos} id={2} toView={[6, 7, 8, 9, 10, 11]}/>
                    }
                </Tab>
                <Tab eventKey="StarWars-1" title="StarWars characters 1">
                    {cardSW.length === 0
                        ? <Spinner className='loading-spinner' animation="grow" variant="success"/>
                        : <CardBlockSW items={cardSW} id={3} toView={[0, 1, 2, 3, 4, 5]}/>
                    }
                </Tab>
                <Tab eventKey="StarWars-2" title="StarWars characters 2">
                    {cardSW.length === 0
                        ? <Spinner className='loading-spinner' animation="grow" variant="success"/>
                        : <CardBlockSW items={cardSW} id={4} toView={[6, 7, 8, 9, 10]}/>
                    }
                </Tab>
            </Tabs>
        </div>
    );
};

export default Gallery;
