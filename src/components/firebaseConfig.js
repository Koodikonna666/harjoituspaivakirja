import * as firebase from'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCgbQp1p7rS29sPd-9DRD2soMD4AuS5pxA",
    authDomain: "harjoituspaivakirja-e4d80.firebaseapp.com",
    databaseURL: "https://harjoituspaivakirja-e4d80.firebaseio.com",
    projectId: "harjoituspaivakirja-e4d80",
    storageBucket: "harjoituspaivakirja-e4d80.appspot.com",
    messagingSenderId: "1006808097684",
    appId: "1:1006808097684:web:9e3f94c367b46441a36581",
    measurementId: "G-LXG479VFVN"
  };
  
  if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  

  