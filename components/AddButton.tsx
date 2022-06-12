import { StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name='ios-add' size={40} color='white' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 65,
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#2979ff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 65 / 2,
  },
})

export default AddButton
