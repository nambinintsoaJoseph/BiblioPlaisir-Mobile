import React from "react";
import {
    View, 
    ScrollView, 
    StyleSheet
} from 'react-native'; 
import KindCover from "../components/KindCover";
import globalStyle from "../styles/globalStyle";
import TitleScreen from "../components/TitleScreen";
import BottomNavigation from "../components/BottomNavigation";

export default function Kind({navigation}) {
    return (
        <View style={globalStyle.container}>
            <TitleScreen navigation={navigation} title="Genres de livre" />

            <ScrollView
                style={styles.kind}
            >
                <View style={styles.containerKind}>
                    <KindCover image={require('../assets/genres/religion.jpg')} title="Religion" />
                    <KindCover image={require('../assets/genres/horreur.jpeg')} title="Horreur" />
                </View>

                <View style={styles.containerKind}>
                    <KindCover image={require('../assets/genres/romance.jpg')} title="Romance" />
                    <KindCover image={require('../assets/genres/histoire.jpg')} title="Histoire" />
                </View>

                <View style={styles.containerKind}>
                    <KindCover image={require('../assets/genres/science.jpg')} title="Science" />
                    <KindCover image={require('../assets/genres/voyage.jpg')} title="Voyage" />
                </View>

                <View style={styles.containerKind}>
                    <KindCover image={require('../assets/genres/cuisine.jpg')} title="Cuisine" />
                    <KindCover image={require('../assets/genres/conte.jpg')} title="Contes" />
                </View>

                <View style={styles.containerKind}>
                    <KindCover image={require('../assets/genres/fiction.jpg')} title="Fiction" />
                </View>
            </ScrollView>
        
            <View style={globalStyle.navigation}>
                <BottomNavigation navigation={navigation} active='Accueil' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerKind: {
        paddingHorizontal: 10,
        marginTop: 5,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, 

    kind: {
        marginBottom: 70,
    }
})