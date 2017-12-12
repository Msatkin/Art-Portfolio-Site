import React from 'react';
import React_Dom from 'react-dom';
import configureStore from './store/store';  
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Root from './root';
import './components/signIn/googleAuth';

import './index.css';
import './scheme/default.css';


let store = configureStore()


React_Dom.render(
    <MuiThemeProvider>
        <Root store={store}/>
    </MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
