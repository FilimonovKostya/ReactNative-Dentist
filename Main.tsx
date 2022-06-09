import {Button, StyleSheet, Text, View} from "react-native";


const Main = ({route, navigation}:any) => {
    return (
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <Text>HOme</Text>
            <Button title={'Jump to Users Screen'} onPress={() => navigation.navigate('Users')}/>
        </View>
    )
}


export default Main