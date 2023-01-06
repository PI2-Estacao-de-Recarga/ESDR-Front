import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    fontTitle:{
        fontWeight: 'bold',
        fontSize: 50,
        marginBottom: 100
    },
    fontLogin:{
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 25,
        marginRight: 200 
    },
    input:{
        width: 270,
        margin: 12,
        borderBottomWidth: 1,
        padding: 0
    },
    button:{
        backgroundColor: 'black',
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 2,
        width: 100
    },
    textButton:{
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5,
        color: '#FFF'
    },
    fontCreateAccount:{
        marginTop: 10,
        color: 'black'
    },
    fontForgotPassword:{
        marginTop: 25,
        color: 'black'
    }
});

export default styles;