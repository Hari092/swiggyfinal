
import { initializeApp } from "firebase/app";
// eslint-disable-next-line no-unused-vars
import { getAuth, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';



const firebaseConfig = {
  apiKey: "AIzaSyBtuNmmJB3XTBALCXEds4UUIJp_QKE5OVU",
  authDomain: "swiggylike.firebaseapp.com",
  projectId: "swiggylike",
  storageBucket: "swiggylike.appspot.com",
  messagingSenderId: "750098830073",
  appId: "1:750098830073:web:38933d6cd7b21ebfdb0828",
  measurementId: "G-HJJZ7P5YW1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();


export const UserInfo = () => {
  const [photoURL, setPhotoURL] = useState(auth?.currentUser?.photoURL || '');
  const [userName, setUserName] = useState(auth?.currentUser?.displayName || '');
  const [email, setEmail] = useState(auth?.currentUser?.email || '');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setPhotoURL(user?.photoURL || '');
      setUserName(user?.displayName || '');
      setEmail(user?.email || '');
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { userName, photoURL ,email};
};
