import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import FetchService from "../../API/fetch";

const GalleryCardSW = () => {
    const router = useNavigate();
    const params = useParams();

    const [charData, setCharData] = useState([]);

    async function fetchSWCard() {
        const response = await FetchService.getSWCard(params.id);
        if (response?.data) {
            setCharData(response.data)
        }
    }

    useEffect(() => {
        fetchSWCard();
    }, []);

    return (
        <div>
            <button onClick={() => router(-1)}>BACK</button>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <span>Name: {charData.name}</span>
                <span>Gender: {charData.gender}</span>
                <span>Height: {charData.height}</span>
                <span>Mass: {charData.mass}</span>
            </div>
        </div>
    );
};

export default GalleryCardSW;
