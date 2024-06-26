import React, {useState, useEffect} from "react";
import {
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    Dimensions
} from 'react-native'; 
import { useRoute } from "@react-navigation/native";
import TitleScreen from "../components/TitleScreen";
import BottomNavigation from "../components/BottomNavigation";
import globalStyle from "../styles/globalStyle";
import Vocabulary from "../components/Vocabulary";
import PreventScreenBack from "../components/PreventScreenBack";


export default function Vocab({navigation}) {

    const height = Dimensions.get("screen").height;

    const route = useRoute(); 
    const { token } = route.params; 

    const [vocabularies, setVocabularies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://192.168.43.156:80/BiblioPlaisir/api/Vocabulaire.php/lecteur/4', {
            method: 'GET', 
            headers: {
                'Authorization': token, 
                'Content-type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            const userVocabularies = data.map(item => ({
                ...item, 
            }))
            setVocabularies(userVocabularies); 
            setLoading(false); 
        })
        .catch(error => {
            console.error('Erreur de récupération des vocabulaires : ', error);
        })
    }, [token]); 

    return (
        <>
            <PreventScreenBack navigation={navigation} targetScreen='Vocab' />
            <View style={globalStyle.container}>
                <TitleScreen navigation={navigation} title="Vocabulaire enregistré" />

                <FlatList 
                    data={vocabularies}
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