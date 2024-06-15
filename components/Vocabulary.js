import React from "react";
import {
    Text, 
    View, 
    StyleSheet, 
    TouchableWithoutFeedback
} from 'react-native'; 
import { MaterialIcons } from "@expo/vector-icons";

export default function Vocabulary({word, definition, date}) {
    return (
        <View style={styles.container}>
            <View style={styles.containerVocab}>
                <Text style={styles.word}>{word}</Text>
                <Text style={styles.definition}>{definition}</Text>
            </View>
            
            <View style={styles.containerBtn}>
                <TouchableWithoutFeedback>
                    <MaterialIcons name="delete" size={34} color="black" />
                </TouchableWithoutFeedback>
            </View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginTop: 10, 
        paddingBottom: 10, 
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flex: 1,
        flexDirection: 'row'
    },

    containerBtn: {
        alignSelf: 'center'
    },

    containerVocab: {flexBasis: '90%'},

    definition: {
        fontSize: 16,
    }, 

    word: {
        fontSize: 18,
        fontWeight: 'bold', 
    }
})