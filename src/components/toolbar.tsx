import * as React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface ToolbarProps {
    titulo: string;
    menu?:boolean;
    back?: boolean
}
/**
 * TOOLBAR com o nome da tela e a navegação
 */
export function Toolbar (props: ToolbarProps) {
    const nav = useNavigation();
    let leftComponent = (<View/>);
    if (props.back) 
        leftComponent = (<TouchableOpacity onPress={() => nav.goBack()}>
            <MaterialIcons name="arrow-back" color="white" size={20} />
        </TouchableOpacity>)
    
    if (props.menu) 
        leftComponent = (<TouchableOpacity onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
            <MaterialIcons name="menu" color="white" size={20}/>
        </TouchableOpacity>)

  return (
    <Header 
        leftComponent={leftComponent} 
        centerComponent={{text: props.titulo, style:{color: 'white'}}} 
        containerStyle={{backgroundColor:'darkcyan'}} />
  );
}
