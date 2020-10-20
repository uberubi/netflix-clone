import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAIyiun3Q8wXJrdI4uoPPvXRi6fKgE_qDY",
  authDomain: "netflix-e00df.firebaseapp.com",
  databaseURL: "https://netflix-e00df.firebaseio.com",
  projectId: "netflix-e00df",
  storageBucket: "netflix-e00df.appspot.com",
  messagingSenderId: "764306484961",
  appId: "1:764306484961:web:12979a2ce2e64203acd1a0",
};

const firebase = Firebase.initializeApp(config);

// commented after succeed seeding
// seedDatabase(firebase)

export { firebase };
