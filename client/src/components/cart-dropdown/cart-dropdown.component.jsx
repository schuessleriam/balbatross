import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CartDropdownContainer, CartItems, EmptyCart, CheckoutButton } from './cart-dropdown.styles.js';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from './../../redux/cart/cart.selectors';
import { toggleCartHidden } from './../../redux/cart/cart.actions';

const CartDropdown = ( { cartItems, history, dispatch } ) => (
    <CartDropdownContainer>
        <CartItems>
            {   cartItems.length ? 
                    cartItems.map(cartItem => 
                        <CartItem key={cartItem.id} item={cartItem}/>
                    )
                : <EmptyCart>Your cart is currently empty</EmptyCart>        
            }
        </CartItems>
            <CheckoutButton onClick={() => 
                {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }
            }>
                GO TO CHECKOUT
            </CheckoutButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));