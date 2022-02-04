import React from 'react';
import { OrderItem } from '../../components/order-item';
import { useSelector } from 'react-redux';
import { calcTotalPrice } from '../../components/utils';
import './order-page'

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)
    let tovar = 0
    if(items.length < 1) {
        return <h1>Ваш кошик пустий</h1>
    }
    else if (items.length < 2) {
        tovar = 'товар'
    }
    else if (items.length < 5 ) {
        tovar = 'товари'
     }
     else {
        tovar = 'товарів'
     }
    

    return (
        <div className="order-page">
            <div className="order-page__left">
                {items.map( game => <OrderItem game={game} />)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>
                        {items.length} {tovar} на суму {calcTotalPrice(items)} грн.
                    </span>
                </div>
            </div>
        </div>
    )
}
