import React from "react";
import {
    View,
    Text, 
    Image, 
    StyleSheet
} from 'react-native'

export default function KindCover({image, title}) {
    const cover = image; 
    return (
        <View>
            <Image 
                source={image}
                alt="" 
                style={styles.cover}
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    ); 
}

const styles = StyleSheet.create({
    cover: {
        width: 160, 
        height: 200, 
        borderRadius: 15,
    }, 

    title: {
        fontSize: 18,
        textAlign: 'center'
    }
}); 