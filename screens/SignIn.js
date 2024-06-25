import React, { useState } from "react";
import {
    Image, 
    View, 
    StyleSheet, 
    Text,
    Alert,
    TouchableWithoutFeedback, 
    ActivityIndicator
} from 'react-native';
import InputComponent from "../components/InputComponent";
import PreventScreenBack from "../components/PreventScreenBack";

export default function SignIn({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true); 
        fetch('http://192.168.43.156:80/BiblioPlaisir/api/Authentification.php', {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json',
            }, 
            body: JSON.stringify({
                email: email, 
                mot_de_passe: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.validation == true) {
                // We recover the token : 
                const token = data.token;

                navigation.navigate('Home', {
                    token: token,
                }); 

            }
            else {
                Alert.alert("Erreur d'authentification", "L'information d'authentification est incorrecte");
                setIsLoading(false);
            }
        })
        .catch(error => {
            console.error('Erreur authentification'); 
            setIsLoading(false);
        })
        
    }

    return (
        <>
            <PreventScreenBack navigation={navigation} targetScreen='SignIn' />
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image 
                        source={require('../assets/logo.png')}
                        alt="Logo BiblioPlaisir"
                        style={styles.logo}
                    />
                </View>

                <View style={styles.containerSignIn}>
                    <Text style={styles.title}>Authentification</Text>

                    <InputComponent 
                        label="Email"
                        placeholder="Saisir votre adresse email"
                        typeInput="text"
                        onChangeText={setEmail}
                    />

                    <InputComponent 
                        label="Mot de passe"
                        placeholder="Saisir votre mot de passe"
                        typeInput="Password"
                        onChangeText={setPassword}
                    />

                    {isLoading ? (<ActivityIndicator size="large" color="#0000ff"/>) : (
                        <TouchableWithoutFeedback
                            onPress={() => {

                                // Verification for validation... 
                                handleLogin(); 

                                // navigation.navigate('Home')
                            }}
                        >
                            <View style={[styles.signInBtn, styles.connect]}> 
                                <Text style={styles.textBtn}>Se connecter</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    
                    <Text style={styles.continue}>Mot de passe oublié ?</Text>
                    
                    <TouchableWithoutFeedback>
                        <View style={[styles.signInBtn, styles.create]}> 
                            <Text style={styles.textBtn}>Créer un compte</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <Text style={styles.continue}>Continuer avec</Text>

                    <View style={styles.containerSocial}>
                    
                        <TouchableWithoutFeedback>
                            <Image 
                                source={require('../assets/facebook-logo.png')}
                                alt="Logo de Facebook"
                                style={styles.social}
                            />
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback>
                            <Image 
                                source={require('../assets/google-logo.png')}
                                alt="Logo de Google"
                                style={styles.social}
                            />
                        </TouchableWithoutFeedback>
                    </View>  
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    logo: {
        width: 100,
        height: 80,
        marginTop: 15,
    },

    container: {
        flex: 1,
        backgroundColor: 'black',
    },

    containerLogo: {
        height: 100,
        alignItems: 'center',
        backgroundColor: 'black',
    },

    containerSignIn: {
        borderTopLeftRadius: 50, 
        borderTopRightRadius: 50, 
        flex: 4,
        backgroundColor: 'white',
        paddingHorizontal: 15,
    },

    title: {
        fontSize: 35,
        margin: 20,
        textAlign: 'center',
    }, 

    containerBtn: {
        marginTop: 45, 
        backgroundColor: 'blue',
    }, 

    signInBtn: {
        marginTop: 20,
        padding: 13,
        borderRadius: 15,
    }, 

    connect: {backgroundColor: '#6c63ff'},
    create: {backgroundColor: 'green'}, 

    textBtn: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
    }, 

    social: {
        width: 50, 
        height: 50,
    }, 

    containerSocial: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        padding: 15,
    }, 

    continue: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
    }
}); 