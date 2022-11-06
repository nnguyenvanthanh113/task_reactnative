
import { StyleSheet } from 'react-native';
import color from '../../contains/color';
const styles = StyleSheet.create({
    addTask: {
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        height: 44,
        width: '85%',
        backgroundColor: color.white,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: color.primary,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    iconWrapper: {
        width: 44,
        height: 44,
        backgroundColor: color.primary,
        borderRadius: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 30,
        color: color.white,
    },
})

export default styles;