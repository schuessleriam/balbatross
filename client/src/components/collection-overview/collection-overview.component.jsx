import React from 'react';
import { selectShopCollectionsForPreview } from './../../redux/shop/shop.selectors.js';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CollectionPreview from './../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

const CollectionsOverview = ( { collections } ) => (
    
    <div className="collections-overview">
        {
            collections.map( ({id, ...remainingProps}) => (
                <CollectionPreview key={id} {...remainingProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);