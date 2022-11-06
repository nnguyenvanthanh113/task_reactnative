import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style.js'
const Task = (props) => {
    const { number } = props;
    const numberText = number < 10 ? `0${number}` : number;
    const evenOrOdd = number % 2 ? styles.even : styles.odd;
    return (
        <TouchableOpacity onPress={props.onDeleteTask}>

            <View style={styles.item}>
                <View style={[styles.square, evenOrOdd]}>
                    <Text style={styles.number}> {numberText}</Text>
                </View>
                <Text style={styles.content}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Task;