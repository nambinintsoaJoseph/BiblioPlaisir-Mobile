import React from "react";
import {
    View, 
    Text, 
    StyleSheet
} from 'react-native'; 

import TitleScreen from "../components/TitleScreen";
import BottomNavigation from "../components/BottomNavigation";
import globalStyle from "../styles/globalStyle";

export default function Stat({navigation}) {
    return (
        <View style={globalStyle.container}>
            <TitleScreen title="Statistique" navigation={navigation} />

            <View style={globalStyle.navigation}> 
                <BottomNavigation navigation={navigation} active='Stat' />
            </View>
        </View>
    )
}