import app from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCjn_qKYBufIn1IK8QBi0KaIYs0j6_SndQ",
    authDomain: "sweteam-10.firebaseapp.com",
    databaseURL: "https://sweteam-10-default-rtdb.firebaseio.com/",
    projectId: "sweteam-10",
    storageBucket: "sweteam-10.appspot.com",
    messagingSenderId: "1091431374284",
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.database();
    }

    scores = () => this.db.ref('scores');
}

export default Firebase;
