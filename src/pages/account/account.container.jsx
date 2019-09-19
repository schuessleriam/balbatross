import { connect } from 'react-redux'
import { selectCurrentUser, selectUserSessionChecked } from './../../redux/user/user.selectors.js';
import WithSpinner from './../../components/with-spinner/with-spinner.component';
import WithCondition from './../../components/with-condition/with-condition.component';
import AccountPage from './account.component';

const mapStateToProps = state => ({
    isLoading: !selectCurrentUser(state),
    condition: selectUserSessionChecked(state),
    location: '/',
    description: 'LOGGING IN'
});

const AccountContainer = connect(mapStateToProps)(WithCondition(WithSpinner(AccountPage)));

export default AccountContainer;