import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

const PreventScreenBack = ({navigation, targetScreen}) => {

    // Prevent screen back : 
    useEffect(() => {
        const backAction = () => {
            navigation.navigate(targetScreen);
            return true;
        }

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove(); 
    }, []);

    return null;
}

export default PreventScreenBack;