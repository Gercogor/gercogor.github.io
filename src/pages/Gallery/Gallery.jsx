import React, {useEffect, useState} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import CardPiece from "../../UI/Card/Card";

import './Gallery.css'
import axios from "axios";
import CardBlock from "../../UI/CardBlock/CardBlock";
import PhotoService from "../../API/photos";

const Gallery = () => {

    const [photos, setPhotos] = useState([])
    const [photosIsLoading, setPhotosIsLoading] = useState(true)

    async function fetchPhotos() {
        // setPhotosIsLoading(true);
        const response = await PhotoService.getAll();

        // const response = await axios.get('https://jsonplaceholder.typicode.com/album/1/photos');

        if (response?.data) {
            setPhotos(response.data.results)
        }
    }

    useEffect(() => {
        fetchPhotos();
    }, []);

    return (
        <div className='gallery-wrapper'>
            {/*<button onClick={fetchPhotos}>manually get fetch</button>*/}
            <Tabs defaultActiveKey="cat" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="cat" title="Cat">
                    {photos.length === 0
                        ? <div>LOAD</div>
                        : <CardBlock photos={photos} id={1} toView={[0, 1, 2]}/>
                    }
                </Tab>
                <Tab eventKey="dog" title="Dog">
                    {photos.length === 0
                        ? <div>LOAD</div>
                        : <CardBlock photos={photos} id={2} toView={[3, 4, 5]}/>
                    }
                </Tab>
                <Tab eventKey="rat" title="Rat">
                    {photos.length === 0
                        ? <div>LOAD</div>
                        : <CardBlock photos={photos} id={3} toView={[6, 7, 8]}/>
                    }
                </Tab>
                <Tab eventKey="houses" title="Houses">
                    {photos.length === 0
                        ? <div>LOAD</div>
                        : <CardBlock photos={photos} id={4} toView={[9, 10, 11]}/>
                    }
                </Tab>
            </Tabs>
        </div>
    );
};

export default Gallery;
