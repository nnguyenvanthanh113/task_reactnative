import { StyleSheet } from 'react-native';
import color from '../../contains/color';
const style = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: color.white,
        marginBottom: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 8,
        justifyContent: 'space-between',
    },
    square: {
        width: 48,
        height: 36,
        borderRadius: 10,

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    even: {
        backgroundColor: color.primary,
    },
    odd: {
        backgroundColor: color.green,
    },
    number: {
        fontSize: 16,
        fontWeight: '700',
        color: color.white,
    },
    content: {
        width: '80%',
        fontSize: 16,
    },

})

export default style;