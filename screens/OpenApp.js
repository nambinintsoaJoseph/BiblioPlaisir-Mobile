import React, { useEffect } from 'react'; 
import { View, StyleSheet, Image, Text } from 'react-native'; 

export default function OpenApp({ navigation }) {
    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Pub1'); 
        }, 5000); 

        return () => clearTimeout(timer); 
    }, [navigation])

    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={require('../assets/logo.png')}
                    alt='Logo BiblioPlaisir'
                    style={styles.logo}
                />
                <Text style={styles.title}>BiblioPlaisir</Text>
            </View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#425cf7'
    }, 

    logo: {
        width: 'auto',
        height: 100,
    }, 

    title: {
        fontSize: 25,
        color: 'white',
    }
});