import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';

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

            <View style={styles.container}>
                <Text style={styles.logo}>APP - C</Text>

                <Input placeholder='Digite seu e-mail'  
                    leftIcon={{name:'person', color:'white'}}
                    placeholderTextColor="white"
                    value={this.state.email}
                    onChangeText={(email) => this.setState({email})}
                    inputContainerStyle={styles.containerInput}
                    inputStyle={{color:'white'}}
                />

                <Input placeholder='Digite sua senha' 
                    leftIcon={{name:'lock', color:'white'}}
                    placeholderTextColor="white"
                    value={this.state.senha}
                    onChangeText={(senha) => this.setState({senha})}
                    inputContainerStyle={styles.containerInput}
                    inputStyle={{color:'white'}}
                    secureTextEntry />

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
    containerInput: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 30,
        padding: 5,
        marginBottom: 5,
    },
    cadastrar: {
        color: 'white',
        fontSize: 20,
        textDecorationLine: 'underline',
        margin: 30,
        textAlign: 'center'
    }
});
