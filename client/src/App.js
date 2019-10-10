import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle, MobileSpacer } from './global.styles';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

const CheckoutContainer = lazy(() => import('./pages/checkout/checkout.container'));
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ContactPage = lazy(() => import('./pages/contact/contact.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const AccountContainer = lazy(() => import('./pages/account/account.container.jsx'));
const SignInAndSignUp = lazy(() => 
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);

const App = ({ checkUserSession, currentUser }) => {
 
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <MobileSpacer/>
      <Switch>
        <Suspense fallback={<Spinner/>}>
          <Route exact path="/" component = {HomePage}/>
          <Route path="/shop" component = {ShopPage}/>
          <Route exact path="/checkout"  component = {CheckoutContainer}/>
          <Route exact path="/account"  component = {AccountContainer}/>
          <Route exact path="/contact" component = {ContactPage}/>
          <Route exact path="/signin"  render={() => 
            currentUser ? <Redirect to='/account'/> : <SignInAndSignUp/>
          }/> 
        </Suspense>
      </Switch> 
    </div>
  );    
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
