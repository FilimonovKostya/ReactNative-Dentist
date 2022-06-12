import { StyleSheet, Text, View } from 'react-native'
import InfoItem from './components/InfoItem'
import AddButton from './components/AddButton'
import { NavigationContainer } from '@react-navigation/native'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

// const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <View style={styles.container}>
      {/*<NavigationContainer>*/}
        <Text style={styles.text}>11 September</Text>
        <InfoItem />
        <AddButton />

      {/*</NavigationContainer>*/}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
