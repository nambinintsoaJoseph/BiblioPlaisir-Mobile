import { StyleSheet } from "react-native-web";

const globalStyle = StyleSheet.create({
    container: {
        flex: 1, 
        width: '100%',
    },
    
    navigation: {
        position: 'absolute', 
        bottom: 0,
        right: 0,
        width: '100%',
        justifyContent: 'flex-end'
    },
}); 

export default globalStyle; 