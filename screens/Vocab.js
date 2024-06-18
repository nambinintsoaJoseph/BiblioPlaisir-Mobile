import React from "react";
import {
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    Dimensions
} from 'react-native'; 

import TitleScreen from "../components/TitleScreen";
import BottomNavigation from "../components/BottomNavigation";
import globalStyle from "../styles/globalStyle";
import Vocabulary from "../components/Vocabulary";
import PreventScreenBack from "../components/PreventScreenBack";


export default function Vocab({navigation}) {

    const height = Dimensions.get("screen").height;

    // This is just an example but the data is returned to the server : 
    const vocabulaire = [
        {
            id_vocabulaire: 1, 
            mot: 'jouer', 
            definition_mot: "Se récréer, se divertir, s'amuser", 
            date_ajout: "2024-06-06 21:57:54"
        }, 
        {
            id_vocabulaire: 2, 
            mot: 'similutude', 
            definition_mot: "Transformation composée d'une homothétie et d'une rotation dans un espace affine", 
            date_ajout: "2024-06-06 21:57:54"
        }, 
        {
            id_vocabulaire: 3, 
            mot: 'Instritutionnaliser', 
            definition_mot: "Donner un caractère instutionnel à quelque chose", 
            date_ajout: "2024-06-06 21:57:54"
        },
        {
            id_vocabulaire: 4, 
            mot: 'Bluetooth', 
            definition_mot: "Enssemble de protocoles utilisant une technologie radio courte distance, destiné à simplifier les connexions entres les appareils électronique.", 
            date_ajout: "2024-06-06 21:57:54"
        },
        {
            id_vocabulaire: 5, 
            mot: 'similutude', 
            definition_mot: "Transformation composée d'une homothétie et d'une rotation dans un espace affine", 
            date_ajout: "2024-06-06 21:57:54"
        },
        {
            id_vocabulaire: 6, 
            mot: 'épinard', 
            definition_mot: "Plante potagère dicotylédone, à graine épineuse, dont les feuilles sont comestibles et se manges cuites.", 
            date_ajout: "2024-06-06 21:57:54"
        },
        {
            id_vocabulaire: 7, 
            mot: 'crampon', 
            definition_mot: "Pièce de métal recourbée, à une ou plusieurs pointes, qui sert dans les ouvrages de maçonnerie de charpenterie ou de menuiserie, à attacher fortement quelque chose.", 
            date_ajout: "2024-06-06 21:57:54"
        },
        {
            id_vocabulaire: 8, 
            mot: 'crampon', 
            definition_mot: "Pièce de métal recourbée, à une ou plusieurs pointes, qui sert dans les ouvrages de maçonnerie de charpenterie ou de menuiserie, à attacher fortement quelque chose.", 
            date_ajout: "2024-06-06 21:57:54"
        },
        {
            id_vocabulaire: 9, 
            mot: 'crampon', 
            definition_mot: "Pièce de métal recourbée, à une ou plusieurs pointes, qui sert dans les ouvrages de maçonnerie de charpenterie ou de menuiserie, à attacher fortement quelque chose.", 
            date_ajout: "2024-06-06 21:57:54"
        },
    ]

    return (
        <>
            <PreventScreenBack navigation={navigation} targetScreen='Vocab' />
            <View style={globalStyle.container}>
                <TitleScreen navigation={navigation} title="Vocabulaire enregistré" />

                <FlatList 
                    data={vocabulaire}
                    renderItem={({item}) => (
                        <Vocabulary 
                            word={item.mot}
                            definition={item.definition_mot} 
                            date={item.date_ajout}
                        />
                    )}
                    style={{ marginBottom: 70 }}
                    keyExtractor={(item) => item.id_vocabulaire}
                />

                <View style={globalStyle.navigation}>
                    <BottomNavigation active="Vocab" navigation={navigation} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({ 

})