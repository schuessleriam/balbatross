import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from './../../redux/cart/cart.actions';
import './checkout-item.styles.scss';


const checkoutItem = ( { item, clearItem, addItem, removeItem } ) => {
    const {price, quantity, imageUrl, name} = item;
    
    return (

        <div className="checkout-item">
                    <div className="image-container">
                    <img src={imageUrl} alt="item"/>
                    </div>
                    <div className="name">{name}</div>
                    <div className="quantity">
                        <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
                            <span className="value">{quantity}</span>
                        <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
                    </div>
                    <div className="price">${price * quantity}</div>
                    <div  className="remove-button" onClick={() => clearItem(item)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
}); 

export default connect(null, mapDispatchToProps)(checkoutItem);
