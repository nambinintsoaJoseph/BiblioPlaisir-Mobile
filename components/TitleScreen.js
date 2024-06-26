import React from "react";
import {
    Text, 
    View, 
    StyleSheet, 
    TouchableWithoutFeedback
} from 'react-native'; 
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';

export default function TitleScreen({navigation, title}) {

    const route = useRoute();
    const { token } = route.params;

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={() => {
                    navigation.navigate('Home', {
                        token: token
                    })
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
        fontWeight: 'bold'
    }
}); 