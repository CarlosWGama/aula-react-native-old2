import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import LoginFuncaoScreen from '../screens/login/index.funcao';
import { NavegacaoDrawer } from './drawer-menu';

const Stack = createStackNavigator();

//Principal
export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{animationEnabled: true, headerShown: false}} initialRouteName="app">
            <Stack.Screen name="login" component={LoginFuncaoScreen} />
            <Stack.Screen name="app" component={NavegacaoDrawer}  
                            options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} />
        </Stack.Navigator>
    </NavigationContainer>
)