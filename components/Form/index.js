import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
import { useState } from "react";
import { Platform } from 'react-native-web';

import styles from './style';
const Form = (props) => {
    const [task, setTask] = useState('')
    const handleAddTask = () => {
        if (task == '') {
            alert('Vui long dien cong viec!');
            return false;
        }

        props.addTask(task);
        setTask('');
        Keyboard.dismiss();
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={10}
            style={styles.addTask}>
            <TextInput value={task} placeholder='Your task' style={styles.input}
                onChangeText={(text) => setTask(text)}>
            </TextInput>
            <TouchableOpacity onPress={handleAddTask}>
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>
                        +
                    </Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

export default Form;