import React from 'react';
import { selectShopCollectionsForPreview } from './../../redux/shop/shop.selectors.js';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CollectionPreview from './../collection-preview/collection-preview.component';
import { CollectionsOverviewContainer } from './collection-overview.styles.js';

const CollectionsOverview = ( { collections } ) => (
    
    <CollectionsOverviewContainer>
        {
            collections.map( ({id, ...remainingProps}) => (
                <CollectionPreview key={id} {...remainingProps} />
            ))
        }
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);