import { StyleSheet, Text, View } from 'react-native'
import InfoItem from './Screens/InfoItem'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>11 September</Text>
      <InfoItem />
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
  }
})
