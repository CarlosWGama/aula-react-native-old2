import * as React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute, DrawerActions } from '@react-navigation/native';
import { Toolbar } from '../../components/toolbar';
import { Fab } from '../../components/fab';
import { ItemTarefa } from './components';
import Tarefa from '../../models/tarefa';
import { FlatList } from 'react-native-gesture-handler';
import { TarefaProvider } from '../../providers/tarefas';

export function HomeScreen (props: any) {
    const nav = useNavigation();
    const route = useRoute();

    const [tarefas, setTarefas] = React.useState<Tarefa[]>([]);
    
    //Sempre que for para a página busca novamente pelas tarefas
    nav.addListener("focus", () => {
      TarefaProvider.buscarTodos().then(resultado => setTarefas(resultado))
    })

    //Exclui uma tarefa pelo ID
    const excluir = (id:any) => {
      Alert.alert("Excluir Tarefa", "Deseja realmente excluir essa tarefa?", [
        {text: 'Sim', onPress: () => {
          TarefaProvider.excluir(id);
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