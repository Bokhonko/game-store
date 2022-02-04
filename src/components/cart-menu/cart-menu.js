import React from 'react'
import { Button } from '../button'
import { CartItem } from '../cart-item'
import { calcTotalPrice } from '../utils'
import './cart-menu.css';

export const CartMenu = ({ items, onClick }) => {
    return (
        <div className="cart-menu">
            <div className="cart-menu__games-list">
                {
                    items.length > 0 ? items.map((game) => <CartItem key={game.title} price={game.price} title={game.title} id={game.id} />) : "В кошику пусто"
                }
            </div>
            {
                items.length > 0 ?
                    <div className="cart-menu__arrange">
                        <div className="cart-menu__total-price">
                            <span>Всього:</span>
                            <span>{calcTotalPrice(items)} грн.</span>
                        </div>
                        <Button type="primary" size="m" onClick={onClick}>
                            Оформити замовлення
                        </Button>
                    </div>
                    : null
            }
        </div>
    )
}
