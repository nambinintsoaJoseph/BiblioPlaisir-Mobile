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
import PreventScreenBack from "../components/PreventScreenBack";

export default function Collection({navigation}) {

    // This is an example of books collection in JSON format thanks to the fetch of our endpoint
    const collection = [
        {
            id_collection: 1, 
            date_collection: "2024-06-07 10:47:52", 
            titre: "Le métal perdu", 
            nombre_page: 704, 
            nombre_page_lu: 25,
            photo_couverture: require('../assets/collection/le_metal_perou.png'), 
            nom_auteur: "SANDERSON", 
            prenom_auteur: "BRANDON"
        }, 
        {
            id_collection: 2, 
            date_collection: "2024-06-07 10:47:52", 
            titre: "PHP 7", 
            nombre_page: 633,
            nombre_page_lu: 200, 
            photo_couverture: require('../assets/collection/php7.jpg'), 
            nom_auteur: "Engels", 
            prenom_auteur: "Jean"
        },
        {
            id_collection: 3, 
            date_collection: "2024-06-07 10:47:52", 
            titre: "UML2 par la pratique", 
            nombre_page: 364, 
            nombre_page_lu: 320,
            photo_couverture: require('../assets/collection/uml.png'), 
            nom_auteur: "Roques", 
            prenom_auteur: "Pascal"
        },
    ]

    return (
        <>
            <PreventScreenBack navigation={navigation} targetScreen='Collection' />
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
                            readPage={item.nombre_page_lu}
                        />
                    )}
                    keyExtractor={(item) => item.id_collection}
                    style={styles.collection}
                />

                <View style={globalStyle.navigation}>
                    <BottomNavigation active="Collection" navigation={navigation} />
                </View>
            </View>
        </>
    ); 
} 

const styles = StyleSheet.create({
    collection: {
        marginBottom: 70,
    }
}); 