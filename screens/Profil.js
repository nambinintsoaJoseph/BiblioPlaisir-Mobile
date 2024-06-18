import React from "react";
import {
    View, 
    Text, 
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import TitleScreen from "../components/TitleScreen";
import BottomNavigation from "../components/BottomNavigation";
import globalStyle from "../styles/globalStyle";
import AboutUser from "../components/AboutUser";
import { AntDesign, Entypo } from "@expo/vector-icons";
import PreventScreenBack from "../components/PreventScreenBack";

const ProfileElement = ({text, icon}) => {
    return (
        <>
            <TouchableWithoutFeedback>
                <View style={styles.profileBtn}>
                    <Text style={styles.text}>{text}</Text>
                    <AntDesign name="rightcircle" size={20} color="white" />
                </View>
            </TouchableWithoutFeedback>
        </>
    );
}

export default function Profil({navigation})  {
    return(
    <>
        <PreventScreenBack navigation={navigation} targetScreen='Profil' />
        <View style={globalStyle.container}>
            <TitleScreen title="Profil" navigation={navigation} />

            <View>
                <AboutUser 
                    profilePicture={require('../assets/user/user-profile.jpg')}
                    name="RAZANAKANAMBININTSOA Joseph"
                    id="12"
                />
            </View>

            <View>
                <ProfileElement text="A propos" />
                <ProfileElement text="Modifier le nom" />
                <ProfileElement text="Modifier l'adresse email" />
                <ProfileElement text="Modifier le mot de passe" />

                <View style={[styles.profileBtn, {backgroundColor: 'rgb(111, 9, 4)'}]}>
                    <Text style={styles.text}>Deconnexion</Text>
                    <Entypo name="log-out" size={20} color="white" />
                </View>
            </View>

            <View style={globalStyle.navigation}>
                <BottomNavigation navigation={navigation} active='Profil' />
            </View>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    profileBtn: {
        backgroundColor: '#6c63ff', 
        padding: 20,
        margin: 10, 
        borderRadius: 10, 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    container: {
        paddingHorizontal: 10, 
    }

})