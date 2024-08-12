import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeBasket } from '../redux/basketSlice';
import "./Basket.css"
const Basket = () => {
    const basketItems = useSelector((state) => state.basket);

    const dispatch = useDispatch();

    const handleRemoveBasket = (item) => {
        dispatch(removeBasket(item));
    };
    return (
        <div className="add-container">
           <h2>Basket</h2>
            {basketItems.length > 0 ? (
               <ul>
                    {basketItems.map((item) => (
                       <li key={item.id}>
                       {item.name} - {item.description}
                       <button onClick={() => handleRemoveBasket(item)}>Remove</button>
                     </li>
                    ))}
                </ul>
            ) : (
                <li>No items added</li>
            )}
        </div>
    );
};

export default Basket;
