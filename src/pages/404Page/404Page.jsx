import React from 'react';
import {useNavigate} from "react-router-dom";
import styles from './404Page.module.css'

const Page404 = () => {
    let router = useNavigate();
    return (
        <div className={styles.wrongPage}>
            <p>This is 404`s mistake page</p>
            <button onClick={()=>router('/')}>Back to Start page</button>
            <button onClick={()=>router(-1)}>Back to previous page</button>
        </div>
    );
};

export default Page404;
