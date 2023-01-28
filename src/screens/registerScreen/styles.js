import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
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
    button:{
        backgroundColor: 'black',
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 40,
        borderWidth: 2,
        width: 100
    },
    textButton:{
        fontFamily: theme.fonts.InterRegular,
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5,
        color: '#FFF'
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
});

export default styles;