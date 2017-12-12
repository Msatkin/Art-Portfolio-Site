import React from 'react';
import propTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/:filter?" component={App}/>
            </Router>
        </Provider>
    )
}

Root.propTypes = {
    store: propTypes.object.isRequired
}

export default Root;