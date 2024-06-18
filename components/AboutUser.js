import React from "react";
import {
    View, 
    Text, 
    Image, 
    StyleSheet
} from 'react-native'; 

export default function AboutUser({profilePicture, name, id}) {
    return (
        <View style={styles.container}>
            <Image 
                source={profilePicture}
                alt=""
                style={styles.profilePicture}
            />

            <View style={styles.containerInfo}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.id}>Identifiant du compte : {id}</Text>
            </View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        alignItems: 'center',
        marginTop: 15, 
    },

    containerInfo: {
        marginTop: 5,
    },
    
    profilePicture: {
        width: 100, 
        height: 100, 
        borderRadius: 50,
    }, 

    name: {
        fontSize: 18, 
    },

    id: {
        fontSize: 18,
    }
}); 