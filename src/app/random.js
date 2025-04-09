// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeLtt9ozqnG6Tj9Z6NG1gsG1S8OrQkLVo",
  authDomain: "msnabiel.firebaseapp.com",
  projectId: "msnabiel",
  databaseURL: "https://msnabiel-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "msnabiel.appspot.com",
  messagingSenderId: "716212895434",
  appId: "1:716212895434:web:68a165f2ff7d11480d7e33",
  measurementId: "G-DZVLLCDHX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to generate random data
function generateRandomData() {
  const tds = (Math.random() * 1000).toFixed(2);  // Random TDS between 0-1000
  const ph = (Math.random() * 14).toFixed(2);    // Random pH between 0-14
  const turbidity = (Math.random() * 100).toFixed(2); // Random turbidity between 0-100
  const conductivity = (Math.random() * 1000).toFixed(2); // Random conductivity between 0-1000

  return {
    tds: parseFloat(tds),
    ph: parseFloat(ph),
    turbidity: parseFloat(turbidity),
    conductivity: parseFloat(conductivity),
  };
}

// Function to send data to Firebase
function sendDataToFirebase() {
  const dataObj = generateRandomData();

  // Send the random data to Firebase under 'water-monitor/sensor01'
  const sensorRef = ref(database, "water-monitor/sensor01");
  set(sensorRef, dataObj)
    .then(() => console.log("Data sent to Firebase:", dataObj))
    .catch((error) => console.error("Error sending data to Firebase:", error));
}

// Send random data every 5 seconds
setInterval(sendDataToFirebase, 5000);// Adjust the interval as needed