import { StyleSheet } from 'react-native';
import color from './contains/color';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.backgroundColor,
    },
    body: {
        paddingHorizontal: 18,
        paddingVertical: 25,
        flex: 5,
    },
    header: {
        color: '#21a3d0',
        fontSize: 21,
        fontWeight: 'bold',
        paddingTop: 10,
    },
    bottom: {
        flex: 1,
    },
    items: {
        marginTop: 25,
    },
})

export default styles;