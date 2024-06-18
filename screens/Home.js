import React from "react";
import { View, StyleSheet } from 'react-native'; 

// Components : 
import HeadApp from "../components/HeadApp";
import SearchBar from "../components/SearchBar";
import NewBooks from "../components/NewBooks";
import KindsOfBooks from "../components/KindsOfBooks";
import BottomNavigation from "../components/BottomNavigation";
import PreventScreenBack from '../components/PreventScreenBack';

// Global style : 
import globalStyle from "../styles/globalStyle";

export default function Home({navigation}) {
    return(
        <>
            <PreventScreenBack navigation={navigation} targetScreen='Home' />
            <View style={styles.home}>
                <View style={styles.main}>
                    <View>
                        <HeadApp />
                    </View>
                    
                    <View style={styles.searchBar}>
                        <SearchBar />
                    </View> 

                    <View style={styles.newBook}>
                        <NewBooks />
                    </View>

                    <View style={styles.kindsOfBooks}>
                        <KindsOfBooks navigation={navigation} />
                    </View>
                </View>

                <View style={globalStyle.navigation}>
                    <BottomNavigation active="Accueil" navigation={navigation} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1, 
        marginTop: 4,
    },

    main: {
        paddingHorizontal: 10,
    },

    searchBar: {
        marginTop: 12,
    }, 

    newBook: {
        marginTop: 12,
    },

    kindsOfBooks: {
        marginTop: 12,
    },

    
}); 