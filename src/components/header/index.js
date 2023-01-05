import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';
import { Header, Left, Right, Icon, Button, Pressable } from 'react-native-elements';

const HeaderComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
    <Header
      leftComponent={
        <View style={{ flexDirection: 'row' }}>
          <Icon name='attach-money' />
          <Text>100</Text>
        </View>
      }
      rightComponent={
        <Button
          icon={
            <Icon
              name='info'
              onPress={() => setModalVisible(true)}
            />
          }
          onPress={() => setModalVisible(true)}
        />
      }
    />
    <Modal
      animationType='slide'
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(false);
      }}
    >
      <View style={{ marginTop: 22 }}>
        <View>
          <Text>Modal Content</Text>
          <Pressable
            title='Close'
            onPress={() => setModalVisible(false)}
          />
        </View>
      </View>
    </Modal>
    </View>
  );
};

export default HeaderComponent;