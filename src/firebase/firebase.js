import firebase from "firebase/app"
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBrtl0_DgBBVCnmnPlCu4r0shqADAwSDeA",
  authDomain: "auth-12fc5.firebaseapp.com",
  projectId: "auth-12fc5",
  storageBucket: "auth-12fc5.appspot.com",
  messagingSenderId: "916704807740",
  appId: "1:916704807740:web:391923d3895d16ad1e6c39",
  measurementId: "G-LKZWRHNKEL",
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
