import React from "react";
import {
    Text, 
    View, 
    StyleSheet, 
    TouchableWithoutFeedback
} from 'react-native'; 
import { AntDesign } from "@expo/vector-icons";

export default function TitleScreen({navigation, title}) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={() => {
                    navigation.navigate('Home')
                }}
            >
                <Text style={styles.titleScreen}>
                    <AntDesign name="leftcircleo" size={28} color="black" /> {title}
                </Text>
            </TouchableWithoutFeedback>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginTop: 5,
    }, 
    
    titleScreen: {
        fontSize: 25,
    }
}); 