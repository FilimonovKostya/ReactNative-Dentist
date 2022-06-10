import { Button, Image, StyleSheet, Text, View } from 'react-native'

const InfoItem = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('./../assets/women1.jpeg')} />
      <View style={styles.infoText}>
        <Text style={styles.heading}>Julia Olsen</Text>
        <Text style={styles.subtitle}>Pulpit, remove tooth</Text>
      </View>
      <Button title={'12:30'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems:'center'
  },
  infoText: {
    flex:1,
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
    marginBottom:3,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '100',
  },
})


export default InfoItem;
