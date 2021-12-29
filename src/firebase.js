import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAoohgQPTq_k5SOqLjLkFQnNYKIgBo2dOs",
  authDomain: "cruddb-4c5b0.firebaseapp.com",
  projectId: "cruddb-4c5b0",
  storageBucket: "cruddb-4c5b0.appspot.com",
  messagingSenderId: "900667177811",
  appId: "1:900667177811:web:4fe2760c11c76b59fd7fa6"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)