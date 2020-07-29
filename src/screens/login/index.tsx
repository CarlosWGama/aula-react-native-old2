import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Input, Button } from 'react-native-elements';
import { InputRound } from './components';

export interface LoginProps {}

export interface LoginState {
    email: string,
    senha: string
}

export default class LoginScreen extends React.Component<LoginProps, LoginState> {
  
    public email: string = '';
    public senha: string = '';
  
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };
    }

    logar() {
        if (this.state.email == 'teste@teste.com' && this.state.senha == '123456')
            console.log('Logado com sucesso');
        else
            console.log('Email ou senha incorreta ');
        
    }

  public render() {
    return (<ImageBackground source={require('./../../../assets/imgs/background.png')}
                style={styles.background}>
            <StatusBar style="light"/>        
            <View style={styles.container}>
                <Text style={styles.logo}>APP - C</Text>

                <InputRound placeholder="Digite seu email" icone="person" onChangeText={(email) => this.setState({email})}/>
                <InputRound placeholder="Digite sua senha" icone="lock" senha onChangeText={(senha) => this.setState({senha})}/>

                <Button title="Logar"  buttonStyle={{borderRadius:30}} raised={true} onPress={() => this.logar()} />

                <Text style={styles.cadastrar}>Não possui conta? Clique aqui para se cadastrar</Text>

            </View>

            </ImageBackground>)       
    }
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
