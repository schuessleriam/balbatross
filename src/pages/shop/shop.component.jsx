import React from 'react';
import CollectionsOverview from './../../components/collection-overview/collection-overview.component';
import CollectionPage from "./../collection/collection.component";
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsToObject } from './../../firebase/firebase.utils.js';
import { updateCollections } from './../../redux/shop/shop.actions.js';
import { connect } from 'react-redux';
import WithSpinner from './../../components/with-spinner/with-spinner.component';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef =  firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collections = convertCollectionsToObject(snapshot);
            updateCollections(collections);
            this.setState({ loading: false });
        });
    };

    componentWillUnmount(){
        this.unsubscribeFromSnapshot();
    };

    render(){
        const { match } = this.props;
        const loading = this.state.loading;
        return(
            <div className="shop-page">
            <Route 
                exact path={`${match.path}`} 
                render={(props) => <CollectionsOverviewWithSpinner {...props} isLoading={loading}/>}
            />
            <Route 
                path={`${match.path}/:collectionId`} 
                render={props => ( 
                    <CollectionPageWithSpinner isLoading={loading} {...props}/> 
                )}
            />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
});


export default connect(null, mapDispatchToProps)(ShopPage);