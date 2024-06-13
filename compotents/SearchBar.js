import React from "react";
import {
    View, 
    TextInput, 
    StyleSheet
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <Ionicons 
                name="search"
                size={25}
                color="black"
                style={styles.icon}
            />

            <TextInput 
                style={styles.input}
                placeholder="Trouver un livre"
                placeholderTextColor="#666"
            />
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        borderWidth: 1, 
        borderColor: 'black', 
        borderRadius: 5, 
        padding: 7, 
    },

    icon: {
        marginRight: 10,
    },

    input: {
        flex: 1,
    }
}); 