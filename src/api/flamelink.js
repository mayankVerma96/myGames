import * as firebase from "firebase";
import flamelink from "flamelink";
import "flamelink/content";

const firebaseConfig = {
  apiKey: "AIzaSyAi1efesLPgRM-Q7hD9FHgFzMFNNqLVfBc",
  authDomain: "mygames-b4e49.firebaseapp.com",
  databaseURL: "https://mygames-b4e49.firebaseio.com",
  projectId: "mygames-b4e49",
  storageBucket: "mygames-b4e49.appspot.com",
  messagingSenderId: "923559741028",
  appId: "1:923559741028:web:a21b387df6099853a70171",
  measurementId: "G-E54Q3EFDRL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default flamelink({ firebaseApp });

// const products = await app.content.get("products");
// console.log("All of your products:", products);
