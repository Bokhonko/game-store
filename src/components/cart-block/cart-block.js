import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { BsCartCheck } from "react-icons/bs"
import { CartMenu } from "../cart-menu"; 
import { ItemsInCart } from "../items-in-cart"; 
import { calcTotalPrice } from '../utils';
import { useNavigate } from 'react-router';
import "./cart-block.css";

export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false);
        navigate('/order')
    }, [navigate])

    return (
        
        <div className="cart-block">
            <ItemsInCart quantity={items.length} />
            <BsCartCheck size={25} className="cart-block__icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            { totalPrice > 0 ? (<span className="cart-block__total-prise">{totalPrice} грн.</span>) : null }
          { isCartMenuVisible &&  <CartMenu items={ items } onClick={handleClick}/> }
        </div>
    )
}
