import React from "react";
import {
    View, 
    Text,
    TouchableWithoutFeedback, 
    FlatList, 
    StyleSheet
} from 'react-native'; 
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';

export default function KindsOfBooks({navigation}) {

    const route = useRoute();
    const { token } = route.params;

    const kinds = ['Fiction', 'Horreur', 'Romance', 'Histoire', 'Science', 'Voyage', 'Cuisine', 'Contes', 'Religion']; 

    return (
        <View>
            <TouchableWithoutFeedback
                onPress={() => {
                    navigation.navigate('Kind', {
                        token: token
                    })
                }}
            >
                <Text style={styles.titleComponent}>Genres de livres <AntDesign name="rightcircle" size={24} color="black" /> </Text>
            </TouchableWithoutFeedback>            
            
            <View style={styles.containerBook}>
                {kinds.map((item, index) => (
                    <View key={index} style={styles.kind}>
                        <Text style={styles.textKindBook}>{item}</Text>
                    </View>
                ))}
            </View>
            
        </View>
    ); 
}

const styles = StyleSheet.create({
    titleComponent: {
        fontSize: 20,
        paddingTop: 5, 
        paddingBottom: 5,
        fontWeight: 'bold'
    },

    containerBook: {
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
        alignItems: 'center', 
    },

    kind: {
        width: '30%', 
        margin: '1.6%',
        backgroundColor: '#6c63ff',
        padding: 20,
        borderRadius: 5,
    }, 

    textKindBook: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
    }, 
    
}); 