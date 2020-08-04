import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute, DrawerActions } from '@react-navigation/native';
import { Toolbar } from '../../components/toolbar';
import { Fab } from '../../components/fab';

export function HomeScreen (props: any) {
    const nav = useNavigation();
    const route = useRoute();
    
    //@ts-ignore
    // let {email} = route.params; 
    
    return (
      <View style={style.container}>
          <Toolbar titulo="Home" menu />
          <Fab onPress={() => nav.navigate('tarefa')}/>
      </View>
    );
}

const style = StyleSheet.create({
  container: {flex: 1}
})