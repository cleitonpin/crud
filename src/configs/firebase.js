import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCpTCzpztpDh_CvUkKVbKBLkTk6ga1kS9o",
    authDomain: "crud-a6233.firebaseapp.com",
    databaseURL: "https://crud-a6233.firebaseio.com",
    projectId: "crud-a6233",
    storageBucket: "crud-a6233.appspot.com",
    messagingSenderId: "226155531659",
    appId: "1:226155531659:web:c78a7e86abd4cd1344f38e",
    measurementId: "G-VT7KDQMYL1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default firebase