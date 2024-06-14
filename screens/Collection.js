import React from "react";

import {
    View, 
    Text, 
    StyleSheet
} from 'react-native'

import TitleScreen from "../components/TitleScreen";
import BottomNavigation from "../components/BottomNavigation";
import KindCover from "../components/KindCover";
import globalStyle from "../styles/globalStyle";

export default function Collection({navigation}) {
    return (
        <View style={globalStyle.container}>
            <TitleScreen navigation={navigation} title="Ma collection" />

            <View style={globalStyle.navigation}>
                <BottomNavigation active="Collection" navigation={navigation} />
            </View>
        </View>
    ); 
} 

const styles = StyleSheet.create({
    
}); 