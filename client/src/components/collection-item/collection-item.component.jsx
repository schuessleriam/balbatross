import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './../../redux/cart/cart.actions';
import { CollectionItemContainer, ItemImage, ItemFooter, ItemButton, } from './collection-item.styles.js';

const CollectionItem = ({item, addItem}) => {

    const { name, price, imageUrl } = item; 

    return(
        <CollectionItemContainer>
            <ItemImage style={{backgroundImage: `url(${imageUrl})`}}/>
            <ItemFooter>
                <span>{name}</span>
                <span>{price}</span>
            </ItemFooter>
            <ItemButton inverted onClick={ () => addItem(item)}>ADD TO CART</ItemButton>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);