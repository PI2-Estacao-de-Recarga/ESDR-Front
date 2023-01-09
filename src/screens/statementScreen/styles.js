import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 30,
      width: 300,
      marginVertical: 10,
    },
    date: {
      fontFamily: theme.fonts.InterRegular,
      fontSize: 16,
    },
    quantity: {
      fontFamily: theme.fonts.InterBold,
      fontSize: 20,
    },
    dolar: {
      marginLeft: 4,
      height: 30,
      width: 30,
    },
    movimentation: {
      flexDirection: 'row',
      alignItems: 'center',
    },
});