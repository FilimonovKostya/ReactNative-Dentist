import Main from "./Main";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StatusBar} from "expo-status-bar";
import {Button, Text, View} from "react-native";
import {RootStackParamList, UsersScreeProps} from "./navigationTypes";


// const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();


const Users = ({navigation}: UsersScreeProps) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>User1</Text>
            <Button title={'Jump to home Screen'} onPress={() => navigation.navigate('Home', {
                id: 1,
                name: 'koda',
                isMarried: false
            })}/>
        </View>
    )
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            {/*<Stack.Navigator>*/}
            {/*    <Stack.Screen name="Home" component={Main}/>*/}
            {/*    <Stack.Screen name="Users" component={Users}/>*/}
            {/*</Stack.Navigator>*/}
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Main} />
                <Tab.Screen name="Users" component={Users} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

