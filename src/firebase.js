import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBY31qZBFO4lW0GnyJF4jKjLdglLmml3As",
  authDomain: "drag-and-drop-image-gall-878aa.firebaseapp.com",
  projectId: "drag-and-drop-image-gall-878aa",
  storageBucket: "drag-and-drop-image-gall-878aa.appspot.com",
  messagingSenderId: "338321865926",
  appId: "1:338321865926:web:9a1956072b3512292a2bc7"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export default firebaseApp;