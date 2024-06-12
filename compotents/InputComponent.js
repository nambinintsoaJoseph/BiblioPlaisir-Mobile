import React from "react";
import { Text, View, TextInput, StyleSheet } from 'react-native'; 

export default function InputComponent({label, placeholder, typeInput, onChangeText}) {
    
    let secureText = (typeInput == 'text') ? false : true;
    
    return (
        <View>
            <View style={styles.containerInput}>
                <Text style={styles.label}>{label}</Text>
            </View>

            <View>
                <TextInput 
                    onChangeText={(val) => onChangeText(val)}
                    placeholder={placeholder}
                    secureTextEntry={secureText}
                    style={styles.input}
                />
            </View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    label: {
        color: 'black', 
        fontWeight: 'bold',
        fontSize: 17,
    }, 

    input: {
        paddingLeft: 5,
        fontSize: 17,
        borderWidth: 1, 
        borderStyle: 'solid', 
        borderColor: '#999999',
        padding: 5,
        borderRadius: 5,
    }, 

    containerInput: {
        marginTop: 20,
    },
});