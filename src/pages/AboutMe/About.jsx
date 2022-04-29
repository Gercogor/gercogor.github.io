import React from 'react';
import './About.css'
import {useNavigate} from "react-router-dom";

const About = () => {
    const router = useNavigate();
    return (
        <div className='about'>
            <button onClick={() => router('/')}>To main</button>
            <h3 style={{textAlign:'center'}}>Что используется</h3>
            <h4>React</h4>
            <p>Основа</p>
            <h4>react-bootstrap</h4>
            <p>Оформление</p>
            <h4>react-router-dom</h4>
            <p>Навигация</p>
            <h4>Axios</h4>
            <p>Сделано 2 разных запроса на <a href='https://jsonplaceholder.typicode.com/'>JsonPlaceHolder</a> и <a href='https://swapi.dev/'>SW Api</a>.</p>
            <p>Выгрузка всех данных для формирования галереи и подробных данных для карточки.</p>
            <h4>gh-pages</h4>
            <p>Deploy</p>
        </div>
    );
};

export default About;
