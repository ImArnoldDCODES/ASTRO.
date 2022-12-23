import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAxhz-eZEgCx8fQFco92_E-MVlGVre5_0k',
  authDomain: 'artsty-44984.firebaseapp.com',
  databaseURL: 'https://artsty-44984.firebaseio.com',
  projectId: 'artsty-44984',
  storageBucket: 'artsty-44984.appspot.com',
  messagingSenderId: '391041345600',
  appId: '1:391041345600:android:bce1534fb65959f9eb17a5',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };