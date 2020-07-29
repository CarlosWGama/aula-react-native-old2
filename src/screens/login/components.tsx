import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Input } from 'react-native-elements';

export interface InputRoundProps {
    texto?:string;
    icone: string;
    placeholder: string;
    senha?: boolean;
    onChangeText(texto:string): void;
}

export function InputRound (props: InputRoundProps) {
    return (
      <View>
         {props.texto && <Text style={styles.texto}>{props.texto}</Text>}
         <Input placeholder={props.placeholder}  
            leftIcon={{name:props.icone, color:'white'}}
            placeholderTextColor="white"
            inputContainerStyle={styles.containerInput}
            onChangeText={(texto) => props.onChangeText(texto)}
            secureTextEntry={props.senha}
            inputStyle={{color:'white'}} />
      </View>
    );
}

const styles = StyleSheet.create({
    texto: { fontSize: 20, color: 'white' },
    containerInput: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 30,
        padding: 5,
        marginBottom: 5,
    }
})
