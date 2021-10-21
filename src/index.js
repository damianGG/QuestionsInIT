import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import './index.css';
import TagManager from 'react-gtm-module'
import reducers from './reducers';
import App from './App';
import {AppBar,Typography,Container}
from '@material-ui/core';
import Navbar from './components/Header/Navbar';


const store = createStore(reducers,compose(applyMiddleware(thunk))); 
const tagManagerArgs = {
    gtmId: 'G-73BCM11PKV'
}
 
TagManager.initialize(tagManagerArgs)


ReactDOM.render(
            <Provider store ={store}>
                    {/* <Navbar /> */}
                    <App/>           
            </Provider>
    ,document.getElementById('root')
);