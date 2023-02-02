import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        height: '8%',
        top: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    iconRight: {
        marginLeft: 'auto',
    },
    textLeft: {
        marginRight: 'auto',
    },
    body: {
        fontFamily: theme.fonts.InterBold,
        fontSize: 15,
        color: "#000000",
    },
    centeredView: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: 'rgba(0, 0, 0, 0.1)',
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
        letterSpacing: 0.1,
    },
    titleParagraph: {
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 20,
        color: "black",
        fontWeight: "bold",
        textDecorationLine: 'underline',
    }
});