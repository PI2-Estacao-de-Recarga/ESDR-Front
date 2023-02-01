import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    fontTitle:{
        fontWeight: 'light',
        fontSize: 15,
        fontFamily: theme.fonts.InterLight,
        marginBottom: 100
    },
    button:{
        backgroundColor: 'black',
        borderRadius: 10,
        width: 200,
        height: 40,
        marginVertical: 20,
        justifyContent: 'center',
    },
    textButton:{
        fontFamily: theme.fonts.InterRegular,
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        color: '#FFF'
    }
});

export default styles;