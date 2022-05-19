import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA_q1MdDsHEMOj0e9yhjHvvi6idVlElI4o',
  authDomain: 'crwn-clothing-db-cd9ec.firebaseapp.com',
  projectId: 'crwn-clothing-db-cd9ec',
  storageBucket: 'crwn-clothing-db-cd9ec.appspot.com',
  messagingSenderId: '849160766722',
  appId: '1:849160766722:web:867b3b210b06685b1f2e1b',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
