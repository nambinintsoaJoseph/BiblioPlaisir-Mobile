import React from "react";
import {
    View, 
    Image, 
    StyleSheet, 
    FlatList, 
    Text
} from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons"; 

export default function NewBooks() {

    const element = '../assets/livres/boss.jpg'

    // fetch from server : (this is an exemple for now)
    const books = [
        {
            title: 'Boss', 
            author: 'REBECCA LAMIS',
            images: require('../assets/livres/boss.jpg')
        }, 
        {
            title: 'Forbidden', 
            author: 'VIOLINE WOLF',
            images: require('../assets/livres/Forbidden.jpg')
        }, 
        {
            title: 'La fin des etoiles', 
            author: 'NICOLAS SKINNER',
            images: require('../assets/livres/la_fin_des_etoiles.jpg')
        }, 
        {
            title: 'Cristal noir', 
            author: 'JEANNE FAIVRE',
            images: require('../assets/livres/cristal_noir.jpg')
        }, 
        {
            title: "Jusq'à toi", 
            author: 'Tiphanie Elanor',
            images: require('../assets/livres/jusqu_a_toi.jpg')
        }
    ]; 

    return (
        <View>
            <Text style={styles.titleComponent}>A decouvrir <FontAwesome5 name="book-reader"size={24} color="black" /> </Text>
            
            <FlatList 
                data={books}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => 
                    <View style={[styles.book, index !== 0 && {marginLeft: 10}]}>
                        <Image 
                            source={item.images}
                            style={styles.cover}
                        />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.author}>{item.author}</Text>
                    </View>
                }
            />
        </View>
    ); 
}

const styles = StyleSheet.create({
    cover: {
        width: 150, 
        height: 200,
        borderRadius: 20,
    }, 

    titleComponent: {
        fontSize: 20,
        paddingTop: 5, 
        paddingBottom: 5,
        fontWeight: 'bold'
    },

    title: {
        fontSize: 17,
        fontWeight: 'bold',
        paddingLeft: 3,
    },

    author: {
        paddingLeft: 5,
    }
}); 