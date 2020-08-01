import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import LoginFuncaoScreen from '../screens/login/index.funcao';
import { NavegacaoTarefa } from './tarefa';

const Stack = createStackNavigator();

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