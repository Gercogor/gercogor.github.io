import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import FetchService from "../../API/fetch";
import Image from 'react-bootstrap/Image'

const GalleryCardPhoto = () => {
    const router = useNavigate();
    const params = useParams();

    const [photos, setPhotos] = useState([]);

    async function fetchPhotoCard() {
        const response = await FetchService.getPhotoCard(params.id);
        if (response?.data) {
            setPhotos(response.data)
        }
    }

    useEffect(() => {
        fetchPhotoCard();
    }, []);

    return (
        <div>
            <button onClick={() => router(-1)}>BACK</button>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
                <Image style={{maxHeight: '300px', maxWidth:'300px', marginBottom:'15px'}} src={photos.url}/>
                <h2>Title</h2>
                <p>{photos.title}</p>
            </div>
        </div>
    );
};

export default GalleryCardPhoto;
