import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB9-UtWMcUwk1QlKFgsGp6hmtYS56BuZbU",
    authDomain: "shadow-blog-8b7bb.firebaseapp.com",
    projectId: "shadow-blog-8b7bb",
    storageBucket: "shadow-blog-8b7bb.firebasestorage.app",
    messagingSenderId: "998689039210",
    appId: "1:998689039210:web:3fd32b1acff31578bafb13",
    measurementId: "G-RMLQ4MSQJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, analytics, db, storage, auth };
