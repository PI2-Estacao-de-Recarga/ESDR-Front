import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#FFF'
    },
    input:{
        width: 270,
        margin: 12,
        marginTop: 30,
        borderBottomWidth: 1,
        padding: 0
    },
    text: {
        fontFamily: theme.fonts.InterRegular,
        fontSize: 16,
    },
    fontTitle:{
        fontFamily: theme.fonts.InterRegular,
        fontWeight: 'bold',
        fontSize: 50,
        marginBottom: 60
    },
    fontRegister:{
        fontFamily: theme.fonts.InterRegular,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 25,
        marginRight: 200 
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
    errorText: {
        fontFamily: theme.fonts.InterBold,
        fontSize: 16,
        color: '#000',
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        height: '40%',
        width: '80%',
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
});