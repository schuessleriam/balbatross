import { connect } from 'react-redux';
import { selectIsFetchingUser } from './../../redux/user/user.selectors.js';
import WithSpinner from './../../components/with-spinner/with-spinner.component';
import SignInAndSignUp from './sign-in-and-sign-up.component';

const mapStateToProps = state => ({
    isLoading: selectIsFetchingUser(state),
    description: 'Loading Account'
});

const SignInAndSignUpContainer = connect(mapStateToProps)(WithSpinner(SignInAndSignUp));

export default SignInAndSignUpContainer;