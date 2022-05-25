import React, { useState, useEffect } from 'react';
import MyResult from '../../json/products.json';
import CompareModal from "../../UI/CompareModal/CompareModal";
import "./ComparePage.css";


const ComparePage = () => {
    const [allProducts, setAllProducts] = useState(MyResult.Products);
    const [modalProducts, setModalProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(2)

    function handleCount(e) {
        setCount(+e.target.innerHTML);
        let prod = [];
        for (let i = 0; i < +e.target.innerHTML; i++) {
            prod.push(MyResult.Products[i])
        }
        setProducts(prod)

        let modalProd = allProducts.filter(item=>!prod.includes(item))
        setModalProducts(modalProd)
    }

    const modalSwap = (idProduct, idElem) => {
        let current = products.filter(item=>item.vcode===idProduct);

        let prod = products.map(item=>item)

        let toSwap = allProducts.filter(item=>item.vcode===idElem);
        prod.splice(idProduct,1, toSwap[0])
        setProducts(prod);
        let modalProd = allProducts.filter(item=>!prod.includes(item));
        setModalProducts(modalProd);
    }

    useEffect(() => {
        let prod = [];
        for (let i = 0; i < 2; i++) {
            prod.push(MyResult.Products[i]);
        }
        setProducts(prod);
        let modalProd = allProducts.filter(item=>!prod.includes(item));
        setModalProducts(modalProd);
    }, [allProducts]);


    return (
        <div className="compare">
            {/* <button onClick={() => console.log(products)}>Products</button>
            <button onClick={() => console.log(modalProducts)}>ModalProducts</button> */}
            <header className="compare__header">
                <h1 className="compare__header-title">SmartWatches</h1>
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
                            {products.map((item,i) =>
                                <td className='table__row-cell table__row-cell_border'>
                                    <div className='table__item'>
                                        <img className="table__pic" src={item.url} alt="" />
                                        <CompareModal id={i} onClick={modalSwap} products={modalProducts} />
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

                        <tr className='table__row'>
                            <td className='table__row-head'>Memory</td>
                            {products.map(item =>
                                <td className='table__row-cell'>{item.Memory}</td>
                            )}
                        </tr>

                        <tr className='table__row'>
                            <td className='table__row-head'>Connectivity</td>
                            {products.map(item =>
                                <td className='table__row-cell'>{item.Connectivity}</td>
                            )}
                        </tr>

                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default ComparePage;
