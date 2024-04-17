import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
   <ScrollView horizontal={true} style={styles.container}>
    <View style={[styles.card, styles.cardElevated]}>
      <Text>Tap</Text>
    </View>
    <View style={[styles.card, styles.cardElevated]}>
      <Text>me</Text>
    </View>
    <View style={[styles.card, styles.cardElevated]}>
      <Text>To</Text>
    </View>
    <View style={[styles.card, styles.cardElevated]}>
      <Text>Scroll</Text>
    </View>
    <View style={[styles.card, styles.cardElevated]}>
      <Text>more....</Text>
    </View>
    <View style={[styles.card, styles.cardElevated]}>
      <Text>😚</Text>
    </View>
    
   </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
 },
 container : {
  padding : 8
 },
 card : {
  flex : 1,
  alignItems:'center',
  justifyContent:'center',
  width :100,
  height : 100,
  borderRadius : 8,
  margin : 8,
  
 },
 cardElevated : {
  backgroundColor : '#EF5354',
  elevation : 4,
shadowOffset: {
    width: 1,
height:1
  },
  shadowColor: '#333',
  shadowOpacity: 0.5,
  shadowRadius: 2,


 },
})