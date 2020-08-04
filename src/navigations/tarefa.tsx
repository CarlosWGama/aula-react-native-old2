import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/home';
import { TarefaScreen } from '../screens/tarefa';

const Stack = createStackNavigator();

//Tarefa
export const NavegacaoTarefa = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="tarefa" component={TarefaScreen} />
    </Stack.Navigator>
)