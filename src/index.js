import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase'


const config = {
  apiKey: "AIzaSyCjn_qKYBufIn1IK8QBi0KaIYs0j6_SndQ",
  authDomain: "sweteam-10.firebaseapp.com",
  databaseURL: "https://sweteam-10-default-rtdb.firebaseio.com/",
  projectId: "sweteam-10",
  storageBucket: "sweteam-10.appspot.com",
  messagingSenderId: "1091431374284",
};

  firebase.initializeApp(config);


ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root')
);
