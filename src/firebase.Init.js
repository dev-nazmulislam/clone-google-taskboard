// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuxDZvnrEX71MO_X-l9dxtDL2M7IwlFSY",
  authDomain: "todo-task-list-app.firebaseapp.com",
  projectId: "todo-task-list-app",
  storageBucket: "todo-task-list-app.appspot.com",
  messagingSenderId: "881571212840",
  appId: "1:881571212840:web:7a14e0b5481be37b934f1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
