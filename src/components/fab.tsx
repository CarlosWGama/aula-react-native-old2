import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

/** Propriedades do FabButton */
export interface FabProps {
    top?:boolean;
    left?:boolean;
    icon?: string;
    onPress():void;
}

/**
 * Icone flutuante 
 * @param props 
 */
export function Fab (props: FabProps) {
    //Define qual css será aplicado com base na posiçao
    let extras: any[] = [];
    extras.push(props.top ? styles.top : styles.bottom);
    extras.push(props.left ? styles.left : styles.right);
    if (props.icon == null) props.icon = "add";
    return (
        <View style={[styles.default, ...extras]}>
            <TouchableOpacity onPress={props.onPress} >
                <Icon raised reverse name={props.icon} color='#517fa4' />
            </TouchableOpacity>
        </View>
    );
}
//Define as propriedades padrões de um componente passado como função
Fab.defaultProps = { icon: 'add' }

//Css a  ser aplicado 
const styles = StyleSheet.create({
    default: { position: 'absolute' },
    bottom: { bottom: 10 },
    top: { top: 10},
    left: { left: 10},
    right: { right: 10}
});