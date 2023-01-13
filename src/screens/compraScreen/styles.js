import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        height: '100%',
    },
    item:{
        margin: 10,
    },
    itemTitle1:{
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: '800',
        marginTop: 200,
        paddingBottom: 30,
    },
    input:{
        width: 270,
        alignSelf: 'center',
        margin: 12,
        borderBottomWidth: 1,
        padding: 0
    },
    itemTitle2:{
        borderTopWidth: 2,
        fontSize: 15,
        fontWeight: '600',
        margin: 20,
        paddingTop: 50,
    },
    button1:{
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 40,
        marginLeft: 50,
        marginRight: 5,
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
    viewMoneyIcon:{
        justifyContent: 'center',
        width: 30,
        height: 30,
        marginTop: 100,
        marginLeft: 50,
        marginBottom: 10,
      },
      moneyicon:{
        width: 50,
        height: 50,
      },
});

export default styles;