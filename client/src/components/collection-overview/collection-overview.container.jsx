import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsFetching } from './../../redux/shop/shop.selectors.js';
import WithSpinner from './../with-spinner/with-spinner.component';
import CollectionsOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching
});

const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionOverviewContainer;
