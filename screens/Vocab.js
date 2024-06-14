import React from "react";
import {
    View, 
    Text, 
    StyleSheet
} from 'react-native'; 

import TitleScreen from "../components/TitleScreen";
import BottomNavigation from "../components/BottomNavigation";
import globalStyle from "../styles/globalStyle";

export default function Vocab({navigation}) {
    return (
        <View style={globalStyle.container}>
            <TitleScreen navigation={navigation} title="Vocabulaire enregistré" />

            <View style={globalStyle.navigation}>
                <BottomNavigation active="Vocab" navigation={navigation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ 
})