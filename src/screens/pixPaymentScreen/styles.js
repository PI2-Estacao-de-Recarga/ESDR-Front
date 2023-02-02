import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  fontTitle: {
    fontSize: 20,
    fontFamily: theme.fonts.InterLight,
    color: '#000000',
  },
  fontSubtitle: {
    fontSize: 20,
    fontFamily: theme.fonts.InterBold,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 26,
    marginBottom: 6,
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    marginTop: 6,
    marginBottom: 16,
  },
  qrcode: {
    width: 200,
    height: 200,
  },
  divider: {
    backgroundColor: 'black',
    height: 1,
    width: 300,
    marginVertical: 16,
  },
  input: {
    flex: 0.8,
    width: 270,
    height: 40,
    margin: 12,
    marginTop: 30,
    marginBottom: 20,
    borderBottomWidth: 1,
    padding: 0
  },
  copySection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    width: 200,
    height: 40,
    marginVertical: 10,
    justifyContent: 'center',
  },
  textButton: {
    fontFamily: theme.fonts.InterRegular,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5,
    color: '#FFF'
  },
  copiaCola:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

});