import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,signOut
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
const firebaseConfig = {
  apiKey: "AIzaSyDtRrz3eQgnYv8DEyBdyS0feFlIXyZaIr0",
  authDomain: "first-project-46afb.firebaseapp.com",
  projectId: "first-project-46afb",
  storageBucket: "first-project-46afb.appspot.com",
  messagingSenderId: "333172849258",
  appId: "1:333172849258:web:f5f72c8f25521bbcdea813",
  measurementId: "G-5F76JP3Y9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

const analytics = getAnalytics(app);

export {
  auth,
  db,
  storage,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  doc,
  setDoc,
  ref,
  uploadBytes,
  getDownloadURL,
  signInWithEmailAndPassword,
  signOut,
  getDoc,addDoc,collection,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
};
