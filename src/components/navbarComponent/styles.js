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
    body: {
        fontFamily: theme.fonts.InterBold,
        fontSize: 15,
        color: "#000000",
    }
});