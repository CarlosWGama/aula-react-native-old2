import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute, DrawerActions } from '@react-navigation/native';
import { Toolbar } from '../../components/toolbar';
import { Fab } from '../../components/fab';
import { ItemTarefa } from './components';
import Tarefa from '../../models/tarefa';

export function HomeScreen (props: any) {
    const nav = useNavigation();
    const route = useRoute();
    
    //@ts-ignore
    // let {email} = route.params; 
    return (
      <View style={style.container}>
          <Toolbar titulo="Home" menu />


          <ItemTarefa 
              tarefa={new Tarefa('aaa', '05/08/2020')} 
              onEditar={(tarefa) => nav.navigate('tarefa', {tarefa})}
              onExcluir={(id) => console.log(id)}/>

          <Fab onPress={() => nav.navigate('tarefa')}/>
      </View>
    );
}

const style = StyleSheet.create({
  container: {flex: 1}
})