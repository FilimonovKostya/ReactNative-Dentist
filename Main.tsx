import {Button, Text, View} from "react-native";
import {HomeScreeProps} from "./navigationTypes";


const Main = ({route, navigation}: HomeScreeProps) => {
    console.log('route',route.params)
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>HOme</Text>
            <Text>{route.params.name}</Text>
            <Button title={'Jump to Users Screen'} onPress={() => navigation.navigate('Users')}/>
        </View>
    )
}


export default Main