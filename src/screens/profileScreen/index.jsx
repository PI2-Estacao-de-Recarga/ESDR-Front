import React, { useState} from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Teste',
    email: 'teste@email.com',
    cpf: '***.***.***-**',
  });

	return (
		<View style={styles.container}>
      <View style={styles.profilePic}>
        <Image
          style={styles.profilePicImage}
          source={require('../../../assets/profilePic.png')}
        />
      </View>
      <View style={styles.profileContent}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.body}>
          {profile.name}
        </Text>
        <Text style={styles.title}>Email</Text>
        <Text style={styles.body}>
          {profile.email}
        </Text>
        <Text style={styles.title}>CPF</Text>
        <Text style={styles.body}>
          {profile.cpf}
        </Text>
      </View>
      <BottomTabs icons={bottomTabIcons} />
		</View>
	);
}

export default Profile;