import * as React from 'react';
import { View, Text } from 'react-native';
import { Toolbar } from '../../../components/toolbar';

export function ConfigGeralScreen (props: any) {
    return (
      <View>
          <Toolbar titulo="Configurações Gerais" menu />

         <Text>Config Geral Screen</Text>
      </View>
    );
}
