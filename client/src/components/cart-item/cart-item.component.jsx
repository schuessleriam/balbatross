import React from 'react';
import { CartItemContainer, ItemImage, ItemDetails, Detail } from './cart-item.styles.js';

const cartItem = ( {item: {price, quantity, imageUrl, name} } ) => (
    <CartItemContainer>
        <ItemImage src={imageUrl} alt="item"/>
        <ItemDetails>
            <Detail className="name">{name}</Detail>
            <Detail className="price">{quantity} x ${price}</Detail>
        </ItemDetails>
    </CartItemContainer>
);

export default cartItem;
