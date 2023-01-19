import React, { useState} from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';
import { useSelector, useDispatch } from 'react-redux'
import { getUserProfile } from '../../domain/store/user/userSlice';


const Profile = () => {
  const dispatch = useDispatch()
  const userRedux = useSelector((state) => state.user)

  if (!userRedux) {
    dispatch(getUserProfile())
  }

  const [profile, setProfile] = useState(userRedux = {
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