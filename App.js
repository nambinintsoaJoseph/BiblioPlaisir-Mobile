import React from 'react'; 
import { View, StyleSheet, StatusBar } from 'react-native';
import AppNavigator from './screens/AppNavigator';

export default function App() {

    StatusBar.setBackgroundColor("#000000");
    const statusBarHeight = StatusBar.currentHeight || 0;

    const styles = StyleSheet.create({
        container: {
            marginTop: statusBarHeight, 
            flex: 1,
        }
    });

    return (
        <View style={styles.container}>
            <AppNavigator />
        </View> 
    ); 
}