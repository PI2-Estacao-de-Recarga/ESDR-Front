import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    profilePic: {
      width: 120,
      height: 120,
      marginVertical: 20,
    },
    profilePicImage: {
      borderRadius: 15,
    },
    profileContent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontFamily: theme.fonts.InterBold,
      fontSize: 24,
      color: "#000000",
      marginVertical: 10,
    },
    body: {
      fontFamily: theme.fonts.InterLight,
      fontSize: 16,
      color: "#000000",
    },
    button: {
      backgroundColor: '#000000',
      borderRadius: 10,
      marginTop: 20,
      borderWidth: 2,
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textButton: {
      alignSelf: 'center',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 5,
      paddingBottom: 5,
      color: '#FFF',
    },
});