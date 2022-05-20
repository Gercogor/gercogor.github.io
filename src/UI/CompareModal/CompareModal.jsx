import React, {useState} from 'react';

import './CompareModal.css';
import vector from "../../img/Vector.svg"
import MyResult from "../../json/products.json";
import {isVisible} from "@testing-library/user-event/dist/utils";

const CompareModal = (props) => {

    const [products, setProducts] = useState(MyResult.Products);
    const [filter, setFilter] = useState('');
    const [visible, setVisible] = useState(false);
    let modalStyle;
    visible ? modalStyle = {visibility:"visible"} :modalStyle = {visibility:"hidden"}

    return (
        <div className="compare-modal_wrapper">
            <button onClick={()=> setVisible(!visible)}>M</button>
            <div className="compare-modal" style={modalStyle}>
                <div className="compare-modal_inner">
                    {
                        products.length > 3
                            ? <input onChange={event => setFilter(event.target.value)}
                                     placeholder="Search"
                                     className='compare-modal_input'
                                     type="search"
                            />
                            : false
                    }

                    {
                        products.filter(elem => elem.Model.toLowerCase().includes(filter.toLowerCase()) || filter === '').map((elem, i) =>
                            <div key={i} className="compare-modal_item">
                                <img
                                    onClick={() => console.log('click')}
                                    className="compare-modal_add-compare"
                                    src={vector}
                                    alt=""
                                />
                                <img className="compare-modal_pic" src={elem.url} alt=""/>
                                <div className="compare-modal_model">{elem.Model}</div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default CompareModal;
