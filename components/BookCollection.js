import React from "react";
import {
    View, 
    Text,
    Image, 
    StyleSheet, 
    TouchableWithoutFeedback
} from 'react-native'; 
import { Entypo } from "@expo/vector-icons";

export default function BookCollection({cover, title, authorName, authorFullName, numberBookPage}) {
    return (
        <View style={styles.container}>
            <Image 
                source={cover}
                alt={title}
                style={styles.cover}
            />

            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text>{authorFullName.toUpperCase() + ' ' + authorName.toUpperCase()}</Text>
                <Text>{numberBookPage} pages</Text>
                <TouchableWithoutFeedback>
                    <View style={styles.btn}>
                        <Text style={styles.textBtn}> <Entypo name="open-book" size={24} color="white" /> Continuer</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rbga(255, 255, 255, 0.6)', 
        paddingHorizontal: 10, 
        marginBottom: 10,
        flex: 1, 
        flexDirection: 'row',

    }, 

    cover: {
        width: 150, 
        height: 200,
        borderRadius: 10,
    }, 

    info: {
        alignSelf: 'center',
        marginLeft: 5,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }, 

    btn: {
        padding: 10, 
        backgroundColor: '#6c63ff',
        width: 130,
        marginTop: 5,
        borderRadius: 5, 
    }, 

    textBtn: {
        color: 'white',
        fontSize: 18,
    }
}); 