import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native-elements';
import { InputRound } from './components';

export interface LoginProps {}

export default function LoginFuncaoScreen(props: LoginProps) {
    const [ email, setEmail ] = React.useState('')
    const [ senha, setSenha ] = React.useState('')
   
    //Função para Logar
    const logar = () => {
        if (email == 'teste@teste.com' && senha == '123456')
            console.log('Logado com sucesso');
        else
            console.log('Email ou senha incorreta ');
    }

     return (<ImageBackground source={require('./../../../assets/imgs/background.png')}
                style={styles.background}>
            <StatusBar style="light"/>        
            
            <View style={styles.container}>
                <Text style={styles.logo}>APP - F</Text>

                <InputRound placeholder="Digite seu email" icone="person" onChangeText={(email) => setEmail(email)}/>
                <InputRound placeholder="Digite sua senha" icone="lock" senha onChangeText={(senha) => setEmail(senha)}/>

                <Button title="Logar"  buttonStyle={{borderRadius:30}} raised={true} onPress={logar} />

                <Text style={styles.cadastrar}>Não possui conta? Clique aqui para se cadastrar</Text>

            </View>

            </ImageBackground>)       
}
    
const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex:1,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    btnRound: {
        borderRadius:30,
    },
    logo: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
    },
    cadastrar: {
        color: 'white',
        fontSize: 20,
        textDecorationLine: 'underline',
        margin: 30,
        textAlign: 'center'
    }
});
