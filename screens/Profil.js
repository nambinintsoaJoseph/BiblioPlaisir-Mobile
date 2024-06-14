import React from "react";
import {
    View, 
    Text
} from 'react-native';
import TitleScreen from "../components/TitleScreen";
import BottomNavigation from "../components/BottomNavigation";
import globalStyle from "../styles/globalStyle";

export default function Profil({navigation}) {
    return(
        <View style={globalStyle.container}>
            <TitleScreen title="Profil" navigation={navigation} />

            <View style={globalStyle.navigation}>
                <BottomNavigation navigation={navigation} active='Profil' />
            </View>
        </View>
    )
}