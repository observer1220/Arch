import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDe0tjRovcJScbZ0n2j9PG92SB_sfFH9oc',
  authDomain: 'arch-8e2b9.firebaseapp.com',
  projectId: 'arch-8e2b9',
  storageBucket: 'arch-8e2b9.appspot.com',
  messagingSenderId: '888558710381',
  appId: '1:888558710381:web:fad97e47222a0f45749964',
  measurementId: 'G-9BRTLHRNTB',
  databaseURL: 'https://arch-8e2b9-default-rtdb.asia-southeast1.firebasedatabase.app/'
}
firebase.initializeApp(firebaseConfig)

export const db = firebase
