// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { ReactNativeAsyncStorage } from '@react-native-async-storage/async-storage';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM8P-UfqlH1zUdUKGxCN3E9SuvzF1f04I",
  authDomain: "splend-a3687.firebaseapp.com",
  projectId: "splend-a3687",
  storageBucket: "splend-a3687.firebasestorage.app",
  messagingSenderId: "514224126426",
  appId: "1:514224126426:web:3a3c1484af3530226c68e3"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
export const FIREBASE_DB = getFirestore(FIREBASE_APP);