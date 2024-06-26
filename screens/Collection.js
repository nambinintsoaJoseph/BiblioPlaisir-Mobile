import React, { useState, useEffect } from "react";
import {
    View, 
    Text, 
    StyleSheet, 
    FlatList,
    ActivityIndicator,
    Image
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import TitleScreen from "../components/TitleScreen";
import BottomNavigation from "../components/BottomNavigation";
import BookCollection from "../components/BookCollection";
import globalStyle from "../styles/globalStyle";
import PreventScreenBack from "../components/PreventScreenBack";

export default function Collection({navigation}) {

    const route = useRoute();
    const { token } = route.params;

    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {  
       fetch('http://192.168.43.156:80/BiblioPlaisir/api/Collection_livre.php/lecteur/4', {
            method: 'GET', 
            headers: {
                'Authorization': token, 
                'Content-type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            const userCollection = data.map(item => ({
                ...item,
                photo_couverture: item.photo_couverture.replace(/\\/g, ''), 
                chemin: item.chemin.replace(/\\/g, '')
            }))
            setCollection(userCollection); 
            setLoading(false);
        })
        .catch(error => {
            console.error('Erreur du chargement de la collection : ', error); 
        })
            
    }, [token]);


    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

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
                            numberBookPage={parseInt(item.nombre_page, 10)} // Convert to number
                            readPage={parseInt(item.nombre_page_lu, 10)} // Convert to number
                        />
                    )}
                    keyExtractor={(item) => item.id_collection.toString()}
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
