import React, {useEffect} from "react";
import { View, Image, StyleSheet, BackHandler } from 'react-native'; 
import Pub from "../compotents/Pub";
import PreventScreenBack from "../components/PreventScreenBack";

export default function Pub1({navigation}) {
    
    const title = 'Emportez votre bibliothèque'; 
    const text = "Accédez à vos livre n'importe où, que vous soyez chez vous, en voyage ou dans les transport commun.";
    
    return(
        <>
            <PreventScreenBack navigation={navigation} targetScreen='Pub2' />
            <View style={styles.container}>

                <Image 
                    source={require('../assets/pub2.png')}
                    alt="Pub 2"
                    style={styles.cover}
                />

                <Pub  
                    title={title}
                    text={text}
                    step={2}
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