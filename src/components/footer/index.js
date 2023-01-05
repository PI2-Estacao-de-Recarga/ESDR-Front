import React from 'react';
import { View, Text } from 'react-native';
import { Footer, FooterTab, Button } from 'react-native-elements';

const FooterComponent = () => {
  return (
    <Footer>
      <FooterTab>
        <Button
          title='Home'
          onPress={() => console.log('Home button pressed')}
        />
        <Button
          title='Extrato'
          onPress={() => console.log('Extrato button pressed')}
        />
        <Button
          title='Perfil'
          onPress={() => console.log('Perfil button pressed')}
        />
      </FooterTab>
    </Footer>
  );
};

export default FooterComponent;