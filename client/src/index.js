import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import store from './store';

injectTapEventPlugin();

function render(Component){

ReactDOM.render(
    <AppContainer>
        <MuiThemeProvider>
        <Provider store={store}>
            <Component /> 
            </Provider>
        </MuiThemeProvider>
    </AppContainer>
    , document.getElementById('root'));
}

render(App);

if(module.hot){
    module.hot.accept('./App', ()=>{ render(App)});
}

registerServiceWorker();