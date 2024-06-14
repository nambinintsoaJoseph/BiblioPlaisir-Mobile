import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens stacks : 
import OpenApp from './OpenApp';
import Pub1 from './Pub1';
import Pub2 from './Pub2';
import Pub3 from './Pub3';
import SignIn from './SignIn';
import Home from './Home';
import Collection from './Collection';
import Vocab from './Vocab';
import Stat from './Stat';
import Profil from './Profil';

const Stack = createNativeStackNavigator(); 

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='OpenApp'
                    component={OpenApp}
                    options={{ title: 'OpenApp', headerShown: false, animation: 'none' }}
                />
                <Stack.Screen 
                    name='Pub1'
                    component={Pub1}
                    options={{ title: 'Pub1', headerShown: false, animation: 'none' }}
                />
                <Stack.Screen 
                    name='Pub2'
                    component={Pub2}
                    options={{ title: 'Pub2', headerShown: false, animation: 'none' }}
                />
                <Stack.Screen 
                    name='Pub3'
                    component={Pub3}
                    options={{ title: 'Pub3', headerShown: false, animation: 'none' }}
                />
                <Stack.Screen 
                    name='SignIn'
                    component={SignIn}
                    options={{ title: 'SignIn', headerShown: false, animation: 'none' }}
                />
                <Stack.Screen 
                    name='Home'
                    component={Home}
                    options={{ title: 'Home', headerShown: false, animation: 'none' }}
                />
                <Stack.Screen 
                    name='Collection'
                    component={Collection}
                    options={{ title: 'Collection', headerShown: false, animation: 'none' }}
                />
                <Stack.Screen 
                    name='Vocab'
                    component={Vocab}
                    options={{ title: 'Vocab', headerShown: false, animation: 'none' }}
                />
                <Stack.Screen 
                    name='Stat'
                    component={Stat}
                    options={{ title: 'Stat', headerShown: false, animation: 'none' }}
                />
                <Stack.Screen 
                    name='Profil'
                    component={Profil}
                    options={{ title: 'Profil', headerShown: false, animation: 'none' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    ); 
}