import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tarefa from '../../models/tarefa';
import { SwipeRow } from 'react-native-swipe-list-view';
import { Button } from 'react-native-elements';

export interface ItemTarefaProps {
    tarefa: Tarefa
    onEditar(tarefa:Tarefa):any;
    onExcluir(id: any):any;
}

export function ItemTarefa (props: ItemTarefaProps) {
    return (
        <SwipeRow disableRightSwipe rightOpenValue={-120} stopRightSwipe={-120}>
            {/* OCULTA */}
            <View style={styleIT.invisivel}>
                <Button buttonStyle={styleIT.btnEditar} titleStyle={styleIT.btn} title="Editar" onPress={() => props.onEditar(props.tarefa)} />
                <Button buttonStyle={styleIT.btnExcluir} titleStyle={styleIT.btn} title="Excluir" onPress={() => props.onExcluir(props.tarefa.id)} />
            </View>
            {/* VISIVEL */}
            <View style={styleIT.container}>
                <Text>{props.tarefa.descricao}</Text>
                <Text>{props.tarefa.data}</Text>
            </View>
        </SwipeRow>
        

    );
}

const styleIT = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        padding: 10, 
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    invisivel: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        height: '100%'
    },
    btn: { color: 'white' },
    btnEditar: {backgroundColor: 'blue', width:60, borderRadius:0},
    btnExcluir: {backgroundColor: 'red', width:60, borderRadius:0}
})