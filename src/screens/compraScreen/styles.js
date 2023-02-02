import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        margin: 10,
    },
    itemTitle1: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: '800',
        paddingBottom: 30,
    },
    input: {
        width: 270,
        alignSelf: 'center',
        margin: 20,
        borderBottomWidth: 1,
    },
    itemTitle2: {
        borderTopWidth: 2,
        fontFamily: theme.fonts.InterBold,
        fontSize: 20,
        fontWeight: '600',
        margin: 20,
        paddingTop: 50,
    },
    button1: {
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        width: 300
    },
    textButton: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5,
        color: '#FFF'
    },
    viewMoneyIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 12,
    },
    moneyicon: {
        width: 50,
        height: 50,
        margin: 12,
    },
    textMoney: {
        fontFamily: theme.fonts.InterBold,
        fontSize: 20,
    }
});

export default styles;