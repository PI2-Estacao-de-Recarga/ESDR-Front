import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF22',
  },
  fontTitle: {
    fontSize: 20,
    fontFamily: theme.fonts.InterLight,
    color: '#000000',
  },
  fontSubtitle: {
    fontSize: 20,
    fontFamily: theme.fonts.InterBold,
    color: '#000000',
  },
  fontBody: {
    fontSize: 16,
    fontFamily: theme.fonts.InterLight,
    color: '#000000',
  },
  fontBody2: {
    fontSize: 14,
    fontFamily: theme.fonts.InterLight,
    color: '#000000',
  },
  viewQRCode: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 200,
    // height: 200,
    marginVertical: 20,
  },
  qrcode: {
    width: 200,
    height: 200,
  },
  divider: { 
    backgroundColor: 'black',
    height: 2,
    width: 300,
    marginTop: 20,
    marginBottom: 20
  },
});