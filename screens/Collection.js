import React from "react";

import {
    View, 
    Text, 
    StyleSheet
} from 'react-native'

import TitleScreen from "../components/TitleScreen";
import BottomNavigation from "../components/BottomNavigation";

export default function Collection({navigation}) {
    return (
        <View style={styles.container}>
            <TitleScreen navigation={navigation} title="Ma collection" />
            <BottomNavigation active="Collection" navigation={navigation} />
        </View>
    ); 
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    }

}); 