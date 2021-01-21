import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCDudm2HDnTUTHwJno1cb_As64ocrWecWk",
    authDomain: "tinder-clone-8aed2.firebaseapp.com",
    projectId: "tinder-clone-8aed2",
    storageBucket: "tinder-clone-8aed2.appspot.com",
    messagingSenderId: "951377894494",
    appId: "1:951377894494:web:d37abc591be18a458b28cf"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const database = firebaseApp.firestore()

  export default database
