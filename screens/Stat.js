import React from "react";
import {
    View, 
    Text, 
    StyleSheet, 
    Dimensions
} from 'react-native'; 

import TitleScreen from "../components/TitleScreen";
import BottomNavigation from "../components/BottomNavigation";
import globalStyle from "../styles/globalStyle";
import StatReadMonthly from "../components/StatReadMonthly";
import StatKindBook from "../components/StatKindBook";
import PreventScreenBack from "../components/PreventScreenBack";

export default function Stat({navigation}) {

    const labels = ["Mai", "Juin", "Juillet", "Aout"];
    const bookRead = [12, 16, 5, 18]; 

    return (
        <>
            <PreventScreenBack navigation={navigation} targetScreen='Stat' />
            <View style={globalStyle.container}>
                <TitleScreen title="Statistique" navigation={navigation} />

                <View>
                    <StatReadMonthly labels={labels} dataset={bookRead} />
                    <StatKindBook />
                </View>

                <View style={globalStyle.navigation}> 
                    <BottomNavigation navigation={navigation} active='Stat' />
                </View>
            </View>
        </>
    )
}