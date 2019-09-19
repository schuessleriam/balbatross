import { connect } from 'react-redux'
import { selectCurrentUser, selectUserSessionChecked } from './../../redux/user/user.selectors.js';
import WithSpinner from './../../components/with-spinner/with-spinner.component';
import WithCondition from './../../components/with-condition/with-condition.component';
import CheckoutPage from './checkout.component';

const mapStateToProps = state => ({
    isLoading: !selectCurrentUser(state),
    condition: selectUserSessionChecked(state),
    location: '/signin'
});

const CheckoutContainer = connect(mapStateToProps)(WithCondition(WithSpinner(CheckoutPage)));

export default CheckoutContainer;