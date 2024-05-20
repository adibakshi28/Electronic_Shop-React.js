import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBbCsDUsoDnj1aPWhdkTKzSs4gKe9u1UFY",
	authDomain: "onlineshop-540fc.firebaseapp.com",
	projectId: "onlineshop-540fc",
	storageBucket: "onlineshop-540fc.appspot.com",
	messagingSenderId: "503605397907",
	appId: "1:503605397907:web:7de275e74c7ac71d2cc066"
};
  

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
