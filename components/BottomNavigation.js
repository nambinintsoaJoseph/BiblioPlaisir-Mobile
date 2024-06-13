import React from "react";
import {
    View,
    TouchableNativeFeedback, 
    StyleSheet, 
    Text
} from 'react-native'; 
import { Entypo, FontAwesome5, FontAwesome6, Ionicons } from "@expo/vector-icons";

export default function BottomNavigation() {
    return (
        <View style={styles.containerNavigation}>
            <TouchableNativeFeedback>
                <View style={styles.navigationElement}>
                    <Entypo name="home" size={40} color="#6c63ff" />
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback>
                <View style={styles.navigationElement}>
                    <FontAwesome6 name="book-bookmark" size={35} color="black" />
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback>
                <View style={styles.navigationElement}>
                    <FontAwesome6 name="file-pen" size={35} color="black" />
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback>
                <View style={styles.navigationElement}>
                    <Ionicons name="stats-chart" size={35} color="black" />
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback>
                <View style={styles.navigationElement}>
                    <FontAwesome5 name="user-alt" size={35} color="black" />
                </View>
            </TouchableNativeFeedback>
        </View>
    ); 
}

const styles = StyleSheet.create({
    containerNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 15,
    },
    
    navigationElement: {
        display: 'flex', 
        flexDirection: 'column'
    }, 
}); 