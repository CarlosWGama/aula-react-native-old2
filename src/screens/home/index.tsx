import * as React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute, DrawerActions } from '@react-navigation/native';
import { Toolbar } from '../../components/toolbar';
import { Fab } from '../../components/fab';
import { ItemTarefa } from './components';
import Tarefa from '../../models/tarefa';
import { FlatList } from 'react-native-gesture-handler';

export function HomeScreen (props: any) {
    const nav = useNavigation();
    const route = useRoute();
    const [tarefas, setTarefas] = React.useState([
      new Tarefa("Tarefa 1", "01/01/2019", "1"),
      new Tarefa("Tarefa 2", "01/01/2020", "2"),
      new Tarefa("Tarefa 3", "01/01/2021", "3"),
    ])

    //Exclui uma tarefa pelo ID
    const excluir = (id:any) => {
      Alert.alert("Excluir Tarefa", "Deseja realmente excluir essa tarefa?", [
        {text: 'Sim', onPress: () => {
          console.log('Excluindo item');
        }},
        {text: 'Não'}
      ])
    }

    
    //@ts-ignore
    // let {email} = route.params; 
    return (
      <View style={style.container}>
          <Toolbar titulo="Home" menu />
          
          {/* LISTA DE TAREFAS */}
          <FlatList
            data={tarefas}
            extraData={tarefas}
            keyExtractor={(t) => String(t.id)}
            renderItem={({item}) => (
              <ItemTarefa 
                  tarefa={item} 
                  onEditar={(tarefa) => nav.navigate('tarefa', {tarefa})}
                  onExcluir={excluir}/> 
            )} />
          <Fab onPress={() => nav.navigate('tarefa')}/>
      </View>
    );
}

const style = StyleSheet.create({
  container: {flex: 1}
})