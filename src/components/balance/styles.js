import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#59595912',
        alignSelf: 'center',
        height: 200,
        width: 300,
        borderRadius: 15,
        paddingStart: 5,
        paddingEnd: 5,
    },
    carrousel: {
        height: 200,
        maxHeight: 200,
        margin: 0,
    },
    item:{
        margin: 10,
    },
    itemTitle1:{
        fontFamily: theme.fonts.InterBold,
        marginHorizontal: 12,
        marginVertical: 6,
    },
    itemTitle2:{
        alignSelf: 'center',
        fontWeight: '800',
        padding: 40,
    },
    itemTitle3:{
        fontWeight: '600',
        paddingTop: 10,
        textAlign: 'center',
    },
    useTime:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})

export default styles;