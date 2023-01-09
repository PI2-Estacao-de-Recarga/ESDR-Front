import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  inputBig: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    margin: 20,
    width: 200,
  },
  input: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    margin: 20,
    width: 80,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    borderRadius: 10,
    width: 200,
    height: 40,
    marginVertical: 20,
  },
  buttonText: {
    fontFamily: theme.fonts.InterRegular,
    fontSize: 16,
  }
});