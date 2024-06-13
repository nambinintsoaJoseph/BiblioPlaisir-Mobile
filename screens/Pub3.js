import React, {useEffect} from "react";
import { View, Image, StyleSheet, BackHandler } from 'react-native'; 
import Pub from "../compotents/Pub";
import PreventScreenBack from "../components/PreventScreenBack";

export default function Pub1({navigation}) {
    
    const title = 'Livre gratuit'; 
    const text = "Découvez des trésors de savoir sans ouvrir votre porte-monnaie !";
    
    return(
        <>
            <PreventScreenBack navigation={navigation} targetScreen='Pub3' />
            <View style={styles.container}>

                <Image 
                    source={require('../assets/pub3.png')}
                    alt="Pub 3"
                    style={styles.cover}
                />

                <Pub  
                    title={title}
                    text={text}
                    step={3}
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