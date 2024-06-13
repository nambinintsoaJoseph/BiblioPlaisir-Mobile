import React from "react";
import { View, StyleSheet } from 'react-native'; 

// Components : 
import HeadApp from "../compotents/HeadApp";
import SearchBar from "../compotents/SearchBar";
import NewBooks from "../compotents/NewBooks";
import KindsOfBooks from "../compotents/KindsOfBooks";

export default function Home({navigation}) {
    return(
        <View style={styles.home}>
            <View>
                <HeadApp />
            </View>
            
            <View style={styles.searchBar}>
                <SearchBar />
            </View> 

            <View>
                <NewBooks />
            </View>

            <View>
                <KindsOfBooks />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1, 
        marginTop: 4,
        paddingHorizontal: 10,
    },

    searchBar: {
        marginTop: 10,
    }
}); 