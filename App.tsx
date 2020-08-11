import React from 'react';
import { NavegacaoPrincipal } from './src/navigations';
import firebase from 'firebase';
import { firebaseConfig } from './src/config/firebase-config';

//Configura o Firebase
firebase.initializeApp(firebaseConfig)

export default function App() {
  return (<NavegacaoPrincipal/>);
}
