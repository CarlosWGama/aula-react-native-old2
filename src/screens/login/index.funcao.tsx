import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TextInput, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native-elements';
import { InputRound } from './components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

export interface LoginProps {}

export default function LoginFuncaoScreen(props: LoginProps) {

    const nav = useNavigation();
    const [erro, setErro] = useState('');

    //Função para Logar
    const logar = async (dados) => {
        setErro(""); //Limpa o erro
        
        //Aguarda 1 segundo
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (dados.email == 'teste@teste.com' && dados.senha == '123456')
            //nav.navigate('app', {email: dados.email}); //Caso seja uma navegação direta
            nav.navigate('app'); //Caso seja uma subnavegação
        else
            setErro("Email ou senha incorreta")
    }

     return (<ImageBackground source={require('./../../../assets/imgs/background.png')}
                style={styles.background}>
            <StatusBar style="light"/>        
            
            <View style={styles.container}>
                <Text style={styles.logo}>APP - F</Text>
                {/* FORMULÁRIO */}
                <Formik
                    initialValues={{email:'teste@teste.com', senha:'123456'}}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().required('Informe o email').email('E-mail não válido'),
                        senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa ter 6 caracteres')
                    })}
                    onSubmit={logar} >
                    {({errors, handleChange, handleSubmit, isSubmitting, touched, handleBlur }) => (
                        <View>
                            {/* EMAIL */}
                            <InputRound placeholder="Digite seu email" icone="person" onBlur={handleBlur("email")} onChangeText={handleChange("email")}/>
                            {touched.email && <Text style={styles.erro}>{errors.email}</Text>}
                            {/* SENHA */}
                            <InputRound placeholder="Digite sua senha" icone="lock" senha onBlur={handleBlur("senha")} onChangeText={handleChange("senha")}/>
                            {touched.senha && <Text style={styles.erro}>{errors.senha}</Text>}
                            {/* ENVIAR */}
                            {erro != "" && <Text style={[styles.erroLogin]}>{erro}</Text>}
                            {isSubmitting && <ActivityIndicator size="large"/> }
                            {!isSubmitting &&<Button title="Logar"  buttonStyle={{borderRadius:30}} raised={true} onPress={() => handleSubmit()} />}
                        </View>
                    )}
                </Formik>
                {/* FIM FORMULÁRIO */}
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
    erro: {color:"white", fontSize: 20, textAlign: "right", marginBottom: 10, marginTop: -20},
    erroLogin: { textAlign: 'center', fontSize: 20, color: 'white'},
    cadastrar: {
        color: 'white',
        fontSize: 20,
        textDecorationLine: 'underline',
        margin: 30,
        textAlign: 'center'
    }
});
