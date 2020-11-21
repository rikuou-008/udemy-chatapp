import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA9edEeqfsBSP8_j2nEMJCFJAu3kqPrKx8",
    authDomain: "udemy-chat-33647.firebaseapp.com",
    databaseURL: "https://udemy-chat-33647.firebaseio.com",
    projectId: "udemy-chat-33647",
    storageBucket: "udemy-chat-33647.appspot.com",
    messagingSenderId: "460535743785",
    appId: "1:460535743785:web:f302e6378a6e9978dce338"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messageRef = database.ref('messages');

  export const pushMessage = ({name, text}) => {
      messageRef.push({name, text});
  };