import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5N5O1KewOIuMqolFm1ez-5QIdwe7KtH0",
  authDomain: "voting-system-app-c7cf6.firebaseapp.com",
  projectId: "voting-system-app-c7cf6",
  storageBucket: "voting-system-app-c7cf6.appspot.com",
  messagingSenderId: "125316749706",
  appId: "1:125316749706:web:c87e327aaa38719c925073",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
