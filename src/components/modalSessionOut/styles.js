import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modal: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000050',
},
modalContent: {
    backgroundColor: '#FFF',
    width: '80%',
    height: '40%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
},
  button: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    borderRadius: 10,
    width: 200,
    height: 40,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: theme.fonts.InterRegular,
    fontSize: 16,
    color: '#FFFFFF',
  },
});