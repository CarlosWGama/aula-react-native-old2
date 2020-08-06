import * as React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

export interface AlertCustomProps {
  titulo?:string;
  visivel:boolean;
  children:any;
  onConfirmar();
  onCancelar();
}

export function AlertCustom (props: AlertCustomProps) {
   return (
    <Modal 
        animationType="slide"
        transparent
        visible={props.visivel}
        >
        {/* Centraliza a caixa */}
        <View style={style.modal}>  
            {/* Cria a caixa branca */}
            <View style={style.container}> 
                {props.titulo  && <Text style={style.titulo}>{props.titulo}</Text>}

                {/* Exibe os conteúdos passados externamente */}
                {props.children}

                {/* Ajustar os botões */}
                <View style={style.btns}>
                    <Button title="Confirmar" onPress={props.onConfirmar} type="clear" />
                    <Button title="Cancelar" onPress={props.onCancelar} type="clear" />
                </View>

            </View>
        </View>
    </Modal>);
}

const style = StyleSheet.create({
    modal: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        padding:20
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        borderRadius: 10
    },
    titulo: { textAlign:'center', fontSize: 20},
    btns: {flexDirection: 'row', justifyContent: 'flex-end'}
})

// ===========================================================================
export interface AlertInputProps {
    onChangeText:any;
    placeholder: string;
    onBlur:any
    error?:any;
    senha?: boolean;
    touched?: any;
    noBorder?: boolean;
}


export function AlertInput (props: AlertInputProps) {
    return (
     <View style={[styleI.input, (props.noBorder ? {} : styleI.borderBottom)]}>
        <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText} onBlur={props.onBlur} secureTextEntry={props.senha} />
        {props.touched && props.error && <Text style={styleI.erro}>{props.error}</Text>}
     </View>
     );
 }
 
 const styleI = StyleSheet.create({
     input: {paddingVertical: 5},
     borderBottom: {borderBottomWidth: 1, borderBottomColor: 'lightgray'},
     erro: { textAlign: 'right', color: 'red' }
 })