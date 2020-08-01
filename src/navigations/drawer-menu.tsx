import React from 'react';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons'
import { NavegacaoTarefa } from './tarefa';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { NavegacaoConfiguracao } from './configuracoes';

const Drawer = createDrawerNavigator();

export const NavegacaoDrawer = () => (
    <Drawer.Navigator drawerContent={(props) => (
        <View>
            <Text style={{paddingLeft: 10, paddingTop: 20}}>Bem Vindo</Text>
            <DrawerItemList {...props}/>
            <Button type="clear" title="Sair"  onPress={() => props.navigation.navigate('login')} />
        </View>
    )}>
        <Drawer.Screen name="tarefa" component={NavegacaoTarefa} options={{drawerLabel:"Tarefas", drawerIcon: () => <MaterialIcons name="done" /> }} />
        <Drawer.Screen name="opcoes" component={NavegacaoConfiguracao} options={{drawerLabel: 'Configurações', drawerIcon: () => <MaterialIcons name="settings" />}}  />
    </Drawer.Navigator>
)
