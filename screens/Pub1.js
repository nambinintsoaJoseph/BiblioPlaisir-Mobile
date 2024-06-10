import React, {useEffect} from "react";
import { View, Image, StyleSheet } from 'react-native'; 
import Pub from "../compotents/Pub";
import PreventScreenBack from "../compotents/PreventScreenBack";

export default function Pub1({navigation}) {
    
    const title = 'Expoitez notre vaste bibliothèque'; 
    const text = "Découvez une richesse littérature inégalée à portée de main. Plongez vous dans un monde de connaissance d'aventures et d'inspiration, le tout à porté de votre appareil.";
    
    return(
        <>
            <PreventScreenBack navigation={navigation} targetScreen='Pub1' />
            <View style={styles.container}>

                <Image 
                    source={require('../assets/pub1.png')}
                    alt="Pub 1"
                    style={styles.cover}
                />

                <Pub  
                    title={title}
                    text={text}
                    step={1}
                    navigation={navigation}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        marginTop: 25,
        backgroundColor: 'black'
    },

    cover: {
        width: '100%',
        height: '55%',
    },
}); 