import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
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
    }
});