import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD-pCBIXwd_A6DBe-sjguLJOPDE78_VabM",
    authDomain: "web-scraper-4479d.firebaseapp.com",
    projectId: "web-scraper-4479d",
    storageBucket: "web-scraper-4479d.appspot.com",
    messagingSenderId: "217328307679",
    appId: "1:217328307679:web:116037d890c0669f8b886a"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };