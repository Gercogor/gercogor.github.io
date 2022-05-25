import React, { useState } from 'react';

import './CompareModal.css';
import vector from "../../img/Vector.svg"

const CompareModal = ({ products, onClick, id }) => {
    const [filter, setFilter] = useState('');
    const [visible, setVisible] = useState(false);
    let modalStyle;
    visible ? modalStyle = { visibility: "visible" } : modalStyle = { visibility: "hidden" }

    const allProductsElem = id;

    return (
        <div className="compare-modal_wrapper">
            <button onClick={() => setVisible(!visible)}>M</button>
            <div className="compare-modal" style={modalStyle}>
                {products.length !== 0
                    ?
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
                                        id={elem.vcode}
                                        onClick={()=>onClick(allProductsElem, elem.vcode)}
                                        className="compare-modal_add-compare"
                                        src={vector}
                                        alt={elem.Model}
                                    />
                                    <img className="compare-modal_pic" src={elem.url} alt="" />
                                    <div className="compare-modal_model">{elem.Model}</div>
                                </div>
                            )
                        }
                    </div>
                    :
                    <div>
                        Все товары на экране
                    </div>
                    
                }


            </div>
        </div>
    );
};

export default CompareModal;
