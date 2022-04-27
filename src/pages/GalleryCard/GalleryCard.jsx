import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import PhotoService from "../../API/photos";

const GalleryCard = () => {
    const router = useNavigate();
    const params = useParams();

    const [charData, setCharData] = useState([]);

    console.log(params)

    async function fetchPhotosCard() {
        const response = await PhotoService.getCard(params.id);
        if (response?.data) {
            setCharData(response.data)
        }
    }

    useEffect(() => {
        fetchPhotosCard();
    }, []);



    return (
        <div>
            <button onClick={()=>router(-1)}>BACK</button>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <span>Name: {charData.name}</span>
                <span>Gender: {charData.gender}</span>
                <span>Height: {charData.height}</span>
                <span>Mass: {charData.mass}</span>
            </div>
        </div>
    );
};

export default GalleryCard;
