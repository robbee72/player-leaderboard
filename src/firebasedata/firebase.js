import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCeRBaLm6J3C3cjrMuKaW6tu0D57dx_uIQ',
  authDomain: 'player-leaderboard.firebaseapp.com',
  databaseURL: 'https://player-leaderboard.firebaseio.com',
  projectId: 'player-leaderboard',
  storageBucket: 'player-leaderboard.appspot.com',
  messagingSenderId: '684954334912'
};

firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
