import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store, persistor } from './redux/store';
import  { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import  { BreakpointProvider } from 'react-socks';

ReactDOM.render(
    <BreakpointProvider>
        <Provider store={store}>
            <BrowserRouter> 
                <PersistGate persistor={persistor}>
                    <App /> 
                </PersistGate>
            </BrowserRouter>     
        </Provider>
    </BreakpointProvider>,
    document.getElementById('root'));
