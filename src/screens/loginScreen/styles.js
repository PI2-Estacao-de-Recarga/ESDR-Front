import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
    container:{
        height: '100%',
        flex: 1, 
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontTitle:{
        fontFamily: theme.fonts.InterRegular,
        fontWeight: 'bold',
        fontSize: 50,
        marginBottom: 60
    },
    fontLogin:{
        fontFamily: theme.fonts.InterRegular,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 25,
        marginRight: 220 
    },
    input:{
        width: 270,
        margin: 12,
        marginTop: 30,
        borderBottomWidth: 1,
        padding: 0
    },
    fontCreateAccount:{
        fontFamily: theme.fonts.InterRegular,
        paddingTop: 20,
        marginTop: 10,
        color: 'black'
    },
    fontForgotPassword:{
        fontFamily: theme.fonts.InterRegular,
        marginTop: 25,
        color: 'black'
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
    modal: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;