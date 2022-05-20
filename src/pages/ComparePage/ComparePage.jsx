import React, {useState} from 'react';
import "./ComparePage.css"
import CompareModal from "../../UI/CompareModal/CompareModal";
import MyResult from '../../json/products.json';


const ComparePage = () => {
    const [products, setProducts] = useState(MyResult.Products);
    const [visible, setVisible] = useState(false);
    const [count, setCount] = useState(2)

    function handleCount (e) {
        setCount(+e.target.innerHTML);
        let prod = [];
        for (let i = 0; i < +e.target.innerHTML; i++) {
            prod.push(MyResult.Products[i])
        }
        setProducts(prod)
    }

    return (
        <div className="compare">
            <button onClick={()=>console.log(products)}>!@@!</button>
            <header className="compare__header">
                <h1 className="compare__header-title">SmartPhones</h1>
                <div className="compare__header-num-change">
                    <p>Отобразить товаров:</p>
                    <ul className="compare__header-count">
                        <li onClick={event=>handleCount(event)}>2</li>
                        <li onClick={event=>handleCount(event)}>3</li>
                        <li onClick={event=>handleCount(event)}>4</li>
                        <li onClick={event=>handleCount(event)}>5</li>
                        <li onClick={event=>handleCount(event)}>6</li>
                    </ul>
                </div>
            </header>
            <main>
                <table>
                    {
                        MyResult.ParametricList_Attributes.map(item=>
                            <tr>{item.text}</tr>
                        )
                    }
                </table>
            </main>


            <CompareModal visible={visible}/>
        </div>
    );
};

export default ComparePage;
