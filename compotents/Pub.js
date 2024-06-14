import React from "react";
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

export default function Pub({title, text, step, navigation}) {

    let stepIcon;
     
    switch(step) {
        case 1:
            stepIcon = '🔵 ⚪ ⚪';
            break; 
        case 2:
            stepIcon = '🔵 🔵 ⚪'; 
            break;
        case 3:
            stepIcon = '🔵 🔵 🔵';
            break; 
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
            <Text>{stepIcon}</Text>

            <TouchableWithoutFeedback
                onPress={() => {
                    if (step == 1) {
                        navigation.navigate('Pub2');
                    }
                    else if(step == 2) {
                        navigation.navigate('Pub3'); 
                    }
                }}
            >
                <View style={styles.containerBtn}>
                    <Text style={styles.btnText}>Suivant   <AntDesign name="rightcircle" size={24} color="white"/></Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        marginTop: 25,
        backgroundColor: 'black'
    },

    title: {
        color: 'white',
        marginTop: 5,
        fontSize: 23
    },

    text: {
        color: 'white',
        padding: 25,
        fontSize: 16,
    },

    containerBtn: {
        marginTop: 20,
        backgroundColor: '#6c63ff',
        padding: 10,
        borderRadius: 20,
    },

    btnText: {
        color: 'white',
        fontSize: 20
    }
}); 