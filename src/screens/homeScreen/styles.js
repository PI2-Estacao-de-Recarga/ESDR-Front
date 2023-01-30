import { Row } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        height: '100%',
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
    centeredView: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    input:{
        width: 270,
        margin: 12,
        marginTop: 30,
        borderBottomWidth: 1,
        padding: 0
    },
    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    buttons:{
        flexDirection: 'row',
    },
    buttonClose:{
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 2,
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        elevation: 2,
        width: 100
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    paragraph: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 20,
        color: "black",
        fontWeight: "bold",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default styles;