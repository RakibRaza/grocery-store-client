import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAYVR4xM12cU70s4C96OkJaVNWySpcWi5E",
  authDomain: "grocery-store-bd.firebaseapp.com",
  projectId: "grocery-store-bd",
  storageBucket: "grocery-store-bd.appspot.com",
  messagingSenderId: "1052104045522",
  appId: "1:1052104045522:web:77c46ec6aaba5d882f4e0b",
});
export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const fbProvider = new firebase.auth.FacebookAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
