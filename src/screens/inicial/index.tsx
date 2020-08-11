import * as React from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export function InicialScreen (props: any) {
    const nav = useNavigation()
    firebase.auth().onAuthStateChanged(user => {
        nav.navigate(user == null ? "login" : "app")
    })

    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
         <Text>Aula React Native</Text>
         <Text>Bem Vindo</Text>
      </View>
    );
}
