import React, { useState } from 'react';
import MyResult from '../../json/products.json';
import CompareModal from "../../UI/CompareModal/CompareModal";
import "./ComparePage.css";


const ComparePage = () => {
    const [products, setProducts] = useState(MyResult.Products);
    const [visible, setVisible] = useState(false);
    const [count, setCount] = useState(2)

    function handleCount(e) {
        setCount(+e.target.innerHTML);
        let prod = [];
        for (let i = 0; i < +e.target.innerHTML; i++) {
            prod.push(MyResult.Products[i])
        }
        setProducts(prod)
    }

    return (
        <div className="compare">
            <button onClick={() => console.log(products)}>!@@!</button>
            <header className="compare__header">
                <h1 className="compare__header-title">SmartPhones</h1>
                <div className="compare__header-num-change">
                    <p>Отобразить товаров:</p>
                    <ul className="compare__header-count">
                        <li onClick={event => handleCount(event)}>2</li>
                        <li onClick={event => handleCount(event)}>3</li>
                        <li onClick={event => handleCount(event)}>4</li>
                        <li onClick={event => handleCount(event)}>5</li>
                        <li onClick={event => handleCount(event)}>6</li>
                    </ul>
                </div>
            </header>
            <main className="compare__main">
                <table className='compare__table'>
                    <tbody className='compare__table-body'>
                        <tr className='table__row'>
                            <td className='table__row-head table__row-cell_border'></td>
                            {products.map(item =>
                                <td className='table__row-cell table__row-cell_border'>
                                    <div className='table__item'>
                                        <img className="table__pic" src={item.url} alt="" />
                                        <CompareModal visible={visible} />
                                    </div>
                                </td>
                            )}
                        </tr>

                        <tr className='table__row'>
                            <td className='table__row-head'>Model</td>
                            {products.map(item =>
                                <td className='table__row-cell'>{item.Model}</td>
                            )}
                        </tr>

                        <tr className='table__row'>
                            <td className='table__row-head'>Screen</td>
                            {products.map(item =>
                                <td className='table__row-cell'>{item.Screen}</td>
                            )}
                        </tr>

                        <tr className='table__row'>
                            <td className='table__row-head'>Resolution</td>
                            {products.map(item =>
                                <td className='table__row-cell'>{item.Resolution}</td>
                            )}
                        </tr>

                    </tbody>
                </table>
            </main>


            <CompareModal visible={visible} />
        </div>
    );
};

export default ComparePage;
