import {StyleSheet, Text, View} from "react-native";


const Main = () => {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5b2b2',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Main