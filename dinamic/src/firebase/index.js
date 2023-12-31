
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjGTbcmAtcRFVhJ4sbe88ht9bln0O2Ork",
  authDomain: "echipa6-11d55.firebaseapp.com",
  projectId: "echipa6-11d55",
  storageBucket: "echipa6-11d55.appspot.com",
  messagingSenderId: "538418421472",
  appId: "1:538418421472:web:af167b13a246526cb9ba85",
  measurementId: "G-KFNGG6257S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {
    db
}

// export const getReviews = function(){
// }
// const querySnapshot = await getDocs(collection(db, "review"));
// querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());
// });