import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR7gfp6QsCt3pbT39M7HsyPdE9ditD2yY",
  authDomain: "ai-tuition.firebaseapp.com",
  projectId: "ai-tuition",
  storageBucket: "ai-tuition.firebasestorage.app",
  messagingSenderId: "814166619405",
  appId: "1:814166619405:web:298d85ca64b90f8971ec44"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);