import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from './../../redux/cart/cart.actions';
import {
    CheckoutItemContainer,
    ImageContainer,
    ItemImage,
    ItemName,
    ItemQuantity,
    Arrow,
    Value,
    ItemPrice,
    RemoveButton
 } from './checkout-item.styles.js';

const checkoutItem = ( { item, clearItem, addItem, removeItem } ) => {
    const {price, quantity, imageUrl, name} = item;
    
    return (
        <CheckoutItemContainer>
                    <ImageContainer>
                    <ItemImage src={imageUrl} alt="item"/>
                    </ImageContainer>
                    <ItemName>{name}</ItemName>
                    <ItemQuantity>
                        <Arrow onClick={() => removeItem(item)}>&#10094;</Arrow>
                            <Value>{quantity}</Value>
                        <Arrow onClick={() => addItem(item)}>&#10095;</Arrow>
                    </ItemQuantity>
                    <ItemPrice>${price * quantity}</ItemPrice>
                    <RemoveButton onClick={() => clearItem(item)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
}); 

export default connect(null, mapDispatchToProps)(checkoutItem);
