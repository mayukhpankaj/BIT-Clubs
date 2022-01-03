import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import {initializeAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAu_rM4JkrlIPMOh5OmBNU6bYK3hG5KSM",
  authDomain: "storage-test-d369d.firebaseapp.com",
  projectId: "storage-test-d369d",
  storageBucket: "storage-test-d369d.appspot.com",
  messagingSenderId: "316073838939",
  appId: "1:316073838939:web:b0617ede098a1f1c1ab27e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth();
const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });

export {auth, app}