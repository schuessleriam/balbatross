import React from 'react';
import { useCurrentWidth } from 'react-socks';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from './../../redux/cart/cart.selectors';
import CheckoutItem from "./../../components/checkout-item/checkout-item.component";
import { CheckoutPageContainer, 
    CheckoutHeader, 
    HeaderBlock, 
    Disclaimer, 
    TotalAndPay, 
    Total,
    CheckoutButton, 
    TestCardDisclaimer 
} from './checkout.styles';


const CheckoutPage = ({cartItems, total}) => {

    const width = useCurrentWidth();

    return (
        <CheckoutPageContainer>
        {
        width > 799 ? 
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
        : <CheckoutHeader>
            <HeaderBlock>
                <span>My Cart:</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        }
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} item={cartItem}/>
                )
            }

            <Disclaimer>
                    As I am sure you know, this is not a real store. If you would like 
                    to test the payment Component, you can enter the following demo card 
                    provided by Stripe.
            </Disclaimer>
            <TotalAndPay>
                <CheckoutButton price={total}/>
                <Total>Total: ${total}</Total>
            </TotalAndPay>
            <TestCardDisclaimer>
                *Please use following information for test payments* 
                <br/>
                N: 4242 4242 4242 4242 -- Exp: 12/20 -- CVV: 123
                <br/>
            </TestCardDisclaimer>
        </CheckoutPageContainer>
    );
}
const mapStateToProps = createStructuredSelector({
    total: selectCartTotal,
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CheckoutPage);
