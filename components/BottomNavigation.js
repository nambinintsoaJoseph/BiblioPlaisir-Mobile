import React from "react";
import {
    View,
    TouchableWithoutFeedback, 
    StyleSheet, 
    Text, 
    KeyboardAvoidingView,
    Platform
} from 'react-native'; 
import { Entypo, FontAwesome5, FontAwesome6, Ionicons } from "@expo/vector-icons";

export default function BottomNavigation({navigation, active}) {

    // color : #6c63ff

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.containerNavigation}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        navigation.navigate('Home')
                    }}
                >
                    <View style={styles.navigationElement}>
                        <Entypo 
                            name="home" 
                            size={30} 
                            color={active === 'Accueil' ? '#6c63ff' : 'white' } 
                        />
                        <Text style={styles.textNavigation}>Accueil</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress={() => {
                        navigation.navigate('Collection')
                    }}
                >
                    <View style={styles.navigationElement}>
                        <FontAwesome6 
                            name="book-bookmark" 
                            size={30} 
                            color={active === 'Collection' ? '#6c63ff' : 'white' }
                        />
                        <Text style={styles.textNavigation}>Collection</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress={() => {
                        navigation.navigate('Vocab')
                    }}
                >
                    <View style={styles.navigationElement}>
                        <FontAwesome6 
                            name="file-pen" 
                            size={30} 
                            color={active === 'Vocab' ? '#6c63ff' : 'white' }
                        />
                        <Text style={styles.textNavigation}>Vocab</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress={() => {
                        navigation.navigate('Stat')
                    }}
                >
                    <View style={styles.navigationElement}>
                        <Ionicons 
                            name="stats-chart" 
                            size={30} 
                            color={active === 'Stat' ? '#6c63ff' : 'white' } 
                        />
                        <Text style={styles.textNavigation}>Stat</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress={() => {
                        navigation.navigate('Profil')
                    }}
                >
                    <View style={styles.navigationElement}>
                        <FontAwesome5 
                            name="user-alt" 
                            size={30} 
                            color={active === 'Profil' ? '#6c63ff' : 'white' }
                        />
                        <Text style={styles.textNavigation}>Profil</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </KeyboardAvoidingView>
    ); 
}

const styles = StyleSheet.create({
    containerNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        padding: 10,
        
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    
    navigationElement: {
        display: 'flex', 
        flexDirection: 'column'
    }, 

    textNavigation: {
        color: 'white',
    }
}); 