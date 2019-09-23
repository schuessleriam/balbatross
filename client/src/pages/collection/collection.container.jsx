import { connect } from 'react-redux'
import { selectIsLoaded } from './../../redux/shop/shop.selectors.js';
import WithSpinner from './../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = state =>({
    isLoading: !selectIsLoaded(state)
});

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionPageContainer;