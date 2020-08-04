import * as React from 'react';
import { View, Text } from 'react-native';
import { Toolbar } from '../../../components/toolbar';

export function ConfigInfoScreen (props: any) {
    return (
      <View>
          <Toolbar titulo="Informações" menu />

         <Text>Config Info Screen</Text>
      </View>
    );
}
