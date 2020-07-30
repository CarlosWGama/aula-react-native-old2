import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import LoginFuncaoScreen from '../screens/login/index.funcao';
import { HomeScreen } from '../screens/home';
import { TarefaScreen } from '../screens/tarefa';

const Stack = createStackNavigator();

//Tarefa
const NavegacaoTarefa = () => (
    <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="tarefa" component={TarefaScreen} />
    </Stack.Navigator>
)

//Principal
export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{animationEnabled: true, headerShown: false}}>
            <Stack.Screen name="login" component={LoginFuncaoScreen} />
            <Stack.Screen name="app" component={NavegacaoTarefa}  
                            options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} />
        </Stack.Navigator>
    </NavigationContainer>
)