import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button1:{
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 200,
        borderWidth: 2,
        width: 300
    },
    button2:{
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 2,
        width: 300
    },
    button3:{
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        width: 300
    },
    textButton:{
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5,
        color: '#FFF'
    },
});

export default styles;