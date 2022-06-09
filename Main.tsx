import {Button, Text, View} from "react-native";
import {HomeScreeProps} from "./navigationTypes";


const Main = ({route, navigation}: HomeScreeProps) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>HOme</Text>
            <Button title={'Jump to Users Screen'} onPress={() => navigation.navigate('Users')}/>
        </View>
    )
}


export default Main