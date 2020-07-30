import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export function HomeScreen (props: any) {
    const nav = useNavigation();
    const route = useRoute();
    
    //@ts-ignore
    let {email} = route.params; 
    
    return (
      <View>
         <Text>{email}</Text>
         <Button title="Tarefa" onPress={() => nav.navigate('tarefa')} />
         <Button title="Sair" onPress={() => nav.navigate('login')} />
      </View>
    );
}