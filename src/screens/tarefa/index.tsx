import * as React from 'react';
import { View, Text, Image, Button, StyleSheet, Platform } from 'react-native';
import { Toolbar } from '../../components/toolbar';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import Tarefa from '../../models/tarefa';

export function TarefaScreen (props: any) {
  const route = useRoute();
  const [exibirCalendario, setExibirCalendario] = React.useState(false);
  
  //recupera a tarefa passada ou inicializa
  //@ts-ignore
  const tarefa: Tarefa = (route.params?.tarefa == null ? {id: null, descricao: '', data: moment().format('DD/MM/YYYY')} : route.params?.tarefa)
  const titulo = (tarefa.id == null ? 'Cadastrar ' : 'Editar ') + "Tarefa"; 
  //Tirar foto
  const abrirCamera = async () => {
    console.log('Abrir camera')
  }
  
  //Salvar
  const salvar = async (dados) => {
    console.log(dados);
  }

  
  return (
      <View style={styles.container}>
          <Toolbar titulo={titulo} back />
          

            <Formik
              initialValues={tarefa}
              validationSchema={Yup.object().shape({
                descricao: Yup.string().required('Descrição é obriatório'),
                data: Yup.string().required('Data é obrigatório')
              })}
              onSubmit={salvar}
            >
            {({values, setFieldValue, handleSubmit, handleChange, errors, touched, handleBlur, setFieldTouched }) => (
              <View style={{padding:5}}>
                {/* DESCRIÇÃO */}
                <Text>Descrição</Text>
                <Input placeholder="Digite uma descrição" value={values.descricao} onChangeText={handleChange('descricao')} onBlur={handleBlur("descricao")}></Input>
                { touched.descricao && errors.descricao && <Text style={styles.erro}>{errors.descricao}</Text>}

                {/* DATA */}
                <Text>Data</Text>
                {/* VERSÃO WEB */}
                { Platform.OS == "web" &&
                  <Input maxLength={10} placeholder="Digite a data" value={values.data} onChangeText={handleChange('data')} onBlur={handleBlur("data")}></Input>
                }
                
                {/* VERSÃO NATIVO */}
                {/* Documentação: https://github.com/react-native-community/datetimepicker */}
                {/* Para usar o Moment use: npm install moment */}
                {/* Para usar o date use o import DateTimePicker from '@react-native-community/datetimepicker'; */}
                { Platform.OS != "web" &&
                  <TouchableOpacity onPress={() => setExibirCalendario(true)}>
                    <Text style={{fontSize: 20, marginBottom: 10}}>{values.data}</Text>
                  </TouchableOpacity>}
                { exibirCalendario && <DateTimePicker value={moment(values.data, 'DD/MM/YYYY').toDate()}
                      mode={'date'}
                      maximumDate={new Date(2030, 11, 31)}
                      minimumDate={new Date(2020, 0, 1)}
                      display="default"
                      onChange={(event, data) => {
                        const dataFormatada = moment(data).format('DD/MM/YYYY');
                        console.log(dataFormatada);
                        setFieldValue('data', dataFormatada);
                        setFieldTouched('data', true);
                        setExibirCalendario(false);
                      }} /> }
                { touched.data && errors.data && <Text style={styles.erro}>{errors.data}</Text>}
                
                {/* IMAGEM/FOTO */}
                <View style={{alignItems:'center'}}>
                  <TouchableOpacity onPress={abrirCamera}>
                    <Image source={require('./../../../assets/imgs/camera_on.png')} style={[styles.img]}/>
                  </TouchableOpacity>
                </View>

                {/* BOTÃO SALVAR */}
                <Button title="Salvar" onPress={() => handleSubmit()} />
              </View>)}
            </Formik>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1
  },
  img: {
    height: 300,
    width: 300
  },
  erro: { fontSize: 20, textAlign: "center", marginBottom: 20, marginTop: -10, color: 'red'}
});