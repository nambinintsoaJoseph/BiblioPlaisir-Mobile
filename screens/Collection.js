import React from "react";

import {
    View, 
    Text, 
    StyleSheet, 
    FlatList
} from 'react-native'

import TitleScreen from "../components/TitleScreen";
import BottomNavigation from "../components/BottomNavigation";
import BookCollection from "../components/BookCollection";
import globalStyle from "../styles/globalStyle";

export default function Collection({navigation}) {

    // This is an example of books collection in JSON format thanks to the fetch of our endpoint
    const collection = [
        {
            id_collection: 1, 
            date_collection: "2024-06-07 10:47:52", 
            titre: "Le métal pérou", 
            nombre_page: 225, 
            photo_couverture: require('../assets/collection/le_metal_perou.png'), 
            nom_auteur: "SANDERSON", 
            prenom_auteur: "BRANDON"
        }, 
        {
            id_collection: 2, 
            date_collection: "2024-06-07 10:47:52", 
            titre: "PHP 7", 
            nombre_page: 400, 
            photo_couverture: require('../assets/collection/php7.jpg'), 
            nom_auteur: "Engels", 
            prenom_auteur: "Jean"
        },
        {
            id_collection: 3, 
            date_collection: "2024-06-07 10:47:52", 
            titre: "UML2 par la pratique", 
            nombre_page: 225, 
            photo_couverture: require('../assets/collection/uml.png'), 
            nom_auteur: "Roques", 
            prenom_auteur: "Pascal"
        },
    ]

    return (
        <View style={globalStyle.container}>
            <TitleScreen navigation={navigation} title="Ma collection" />

            <FlatList 
                data={collection}
                renderItem={({item}) => (
                    <BookCollection 
                        cover={item.photo_couverture} 
                        title={item.titre} 
                        authorName={item.nom_auteur}
                        authorFullName={item.prenom_auteur}
                        numberBookPage={item.nombre_page}
                    />
                )}
                keyExtractor={(item) => item.id_collection}
                style={styles.collection}
            />

            <View style={globalStyle.navigation}>
                <BottomNavigation active="Collection" navigation={navigation} />
            </View>
        </View>
    ); 
} 

const styles = StyleSheet.create({
    collection: {
        marginBottom: 70,
    }
}); 