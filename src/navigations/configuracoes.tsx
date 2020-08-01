import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { ConfigGeralScreen } from '../screens/config/geral';
import { ConfigInfoScreen } from '../screens/config/info';

const Tab = createBottomTabNavigator();

export const NavegacaoConfiguracao = () => (
    <Tab.Navigator>
        <Tab.Screen name="config" component={ConfigGeralScreen} options={{
            tabBarLabel:"Configurações", 
            tabBarIcon:() => <MaterialIcons name="settings" size={20}/> 
        }}/>
        <Tab.Screen name="info" component={ConfigInfoScreen} options={{
                tabBarLabel:"Informações", 
                tabBarIcon:() => <MaterialIcons name="info" size={20}/> 
        }}/>
    </Tab.Navigator>
)