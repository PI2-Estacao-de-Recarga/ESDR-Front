import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
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
    noOperations: {
        fontFamily: theme.fonts.InterBold,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center'
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
    title: {
        fontFamily: theme.fonts.InterBold,
        fontSize: 24,
        color: "#000000",
        marginVertical: 10,
    },
    body: {
        fontFamily: theme.fonts.InterBold,
        fontSize: 20,
        color: "#000000",
    },
    page: {
        marginTop: '20%',
        position: 'relative',
        height: '80%',
        flex: 1,
        zIndex: 0
    },
});
