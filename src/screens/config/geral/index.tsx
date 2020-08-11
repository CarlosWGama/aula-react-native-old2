import * as React from 'react';
import { View, Text, ToastAndroid, Button } from 'react-native';
import { Toolbar } from '../../../components/toolbar';
import * as firebase from 'firebase';
import { Input } from 'react-native-elements';

export function ConfigGeralScreen (props: any) {

  const [nome, setNome] = React.useState<any>(firebase.auth().currentUser?.displayName);
  const [senha, setSenha] = React.useState("");

  /** Altera os dados da conta */
  const alterarPerfil = () => {
    //@ts-ignore
    firebase.auth().currentUser?.updateProfile({displayName: nome}).then(() => {
      ToastAndroid.show('Nome alterado', 2000);
    }).catch(erro => {
      console.log(erro)
      ToastAndroid.show('Nao foi possível realizar a ação', 2000);
    })
    
  }

  /** Altera a senha */
  const alterarSenha = () => {
    firebase.auth().currentUser?.updatePassword(senha)
    .then(() => {
      ToastAndroid.show('Senha alterada', 2000);
    })
    .catch(erro => {
      console.log(erro)
      ToastAndroid.show('Nao foi possível realizar a ação', 2000);
    })

  }



    return (
      <View>
          <Toolbar titulo="Configurações Gerais" menu />
          <Text style={{textAlign:'center', fontSize:20}}>Olá {firebase.auth().currentUser?.displayName}</Text>
          <Text style={{textAlign:'center', fontSize:20}}>{firebase.auth().currentUser?.email}</Text>
          {/* NOME */}
          <Input label="Nome" placeholder="Digite seu novo nome" onChangeText={(nome) => setNome(nome)} />
          <Button title="Alterar nome" onPress={alterarPerfil} />
          
          {/* SENHA */}
          <Input label="Senha" secureTextEntry placeholder="Digite sua nova senha" onChangeText={(senha) => setSenha(senha)} />
          <Button title="Alterar nome" onPress={alterarSenha} />
      </View>
    );
}
