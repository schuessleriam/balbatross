import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionByUrl } from './../../redux/shop/shop.selectors';
import CollectionItem from './../../components/collection-item/collection-item.component';
import { CollectionPageStyledContainer, CollectionPageTitle, CollectionPageItems } from './collection.styles';

const CollectionPage = ( { collection } ) => {
    const { title, items } = collection;
    return(
        <CollectionPageStyledContainer>
            <CollectionPageTitle>{title.toUpperCase()}</CollectionPageTitle>
            <CollectionPageItems>
                {
                    items.map(item => 
                        <CollectionItem key={item.id} item={item} />
                    )
                }
            </CollectionPageItems>
        </CollectionPageStyledContainer>
    );
}

const mapStateToProps = (state, thisComponentsProps) => ({
    collection: selectCollectionByUrl(thisComponentsProps.match.params.collectionId)(state)
}); 

export default connect(mapStateToProps)(CollectionPage);