import { initializeApp } from '@react-native-firebase/app';
// import { connectFunctionsEmulator, httpsCallable, getFunctions } from 'firebase/functions';
import { connectFunctionsEmulator, getFunctions, httpsCallable } from '@react-native-firebase/functions';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDkSAjwBGvGW30TyGtgBH_FcDH5C2IFN24",
  authDomain: "cloud-function-197bc.firebaseapp.com",
  projectId: "cloud-function-197bc",
  storageBucket: "cloud-function-197bc.appspot.com",
  messagingSenderId: "334363820754",
  appId: "1:334363820754:web:0739190cdcf51e54a3a30b",
  measurementId: "G-2H81FP6KRD"
};

const app: any = initializeApp(firebaseConfig);

const functions: any = getFunctions(app);

connectFunctionsEmulator(functions, 'localhost', 5001);
export { functions , httpsCallable };
