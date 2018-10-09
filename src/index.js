import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { searchFieldReducer, requestVideosReducer } from './reducers';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
   palette: {
    primary: {
      main: '#f67280',
    },
    secondary: {
      main: '#355c7d',
    },  
    typography: {
    useNextVariants: true,
    },
  },
});

const rootReducers = combineReducers({searchFieldReducer, requestVideosReducer})
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
<MuiThemeProvider theme={theme}>
  <Provider store={store}>
    <Main/>
  </Provider>
</MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
