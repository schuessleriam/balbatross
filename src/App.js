import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import CheckoutContainer from './pages/checkout/checkout.container';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AccountContainer from './pages/account/account.container.jsx';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';



class App extends React.Component {
 
  unsubscribeFromAuth = null;
  
  componentDidMount(){
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/"  component = {HomePage}/>
          <Route path="/shop"  component = {ShopPage}/>
          <Route exact path="/checkout"  component = {CheckoutContainer}/>
          <Route exact path="/account"  component = {AccountContainer}/>
          <Route exact path="/signin"  render={() => this.props.currentUser ? <Redirect to='/account'/> : <SignInAndSignUp/>}/> 
        </Switch> 
      </div>
    );    
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
