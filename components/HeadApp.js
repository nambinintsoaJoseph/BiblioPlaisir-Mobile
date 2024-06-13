import React from "react";
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    TouchableWithoutFeedback
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function HeadApp() {
    return (
        <View style={styles.containerHeadApp}>
            <View style={styles.containerLogo}>
                <Image 
                    source={require('../assets/logo.png')}
                    alt="Logo BiblioPlaisir"
                    style={styles.logo}
                />
                <Text style={styles.appName}>BiblioPlaisir</Text>
            </View>
            
            <View>
                <TouchableWithoutFeedback>
                    <Ionicons 
                        name="notifications-outline"
                        size={35}
                        color="black"
                    />
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 60, 
        height: 40, 
    }, 

    containerHeadApp: { 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginTop: 5,
        height: 50,
    }, 

    containerLogo: {
        flexDirection: 'row',
    },

    appName: {
        fontSize: 25,
        marginTop: 7,
        fontWeight: 'bold'
    }
}); 