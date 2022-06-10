import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const InfoItem = () => {

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('./../assets/women1.jpeg')} />
      <View style={styles.infoText}>
        <Text style={styles.heading}>Julia Olsen</Text>
        <Text style={styles.subtitle}>Pulpit, remove tooth</Text>
      </View>
      <TouchableOpacity style={true ? styles.button : {...styles.button, backgroundColor:'#6dbcf5'}}>
        <Text style={styles.textButton}>12:30</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    flex: 1,
    paddingHorizontal: 13,
    justifyContent: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  heading: {
    fontSize: 18,
    letterSpacing: 1,
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '100',
  },
  button:{
    backgroundColor:'#2979ff',
    paddingVertical:7,
    paddingHorizontal:10,
    borderRadius: 50,
  },
  textButton:{
    color:'white',
    fontSize:16,
    fontWeight: 'bold'
  }
})


export default InfoItem;
