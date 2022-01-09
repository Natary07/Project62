import firebase from 'firebase';

//initialize your database
const firebaseConfig = {
  apiKey: 'AIzaSyAc9rQC-0F-mwM2QkuvB-cx1DV5TIHWEhY',
  authDomain: 'project-60-e60bb.firebaseapp.com',
  databaseURL: 'https://project-60-e60bb-default-rtdb.firebaseio.com',
  projectId: 'project-60-e60bb',
  storageBucket: 'project-60-e60bb.appspot.com',
  messagingSenderId: '34783575648',
  appId: '1:34783575648:web:7416df9df00580feeb8d05',
  measurementId: 'G-TKDTCZVE9Y',
};

firebase.initializeApp(firebaseConfig);
export default firebase.database();
