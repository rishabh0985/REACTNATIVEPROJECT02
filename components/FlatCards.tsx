import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
    <View style = {styles.container}>
        <View style = {[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style = {[styles.card, styles.cardTwo]}>
            <Text>Blue</Text>
        </View>
        <View style = {[styles.card, styles.cardThree]}>
            <Text>Green</Text>
        </View>
        <View style = {[styles.card, styles.cardFour]}>
            <Text>Pink</Text>
        </View>
        <View style = {[styles.card, styles.cardFive]}>
            <Text>Gray</Text>
        </View>
        <View style = {[styles.card, styles.cardSix]}>
            <Text>Gray</Text>
        </View>
        <View style = {[styles.card, styles.cardSeven]}>
            <Text>Gray</Text>
        </View>
    </View>
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
     flex:1,
     flexDirection:'row',
     padding:8,
     
     
},
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    },
    cardFour: {
        backgroundColor: '#9FE2BF'
    },
    cardFive: {
        backgroundColor: '#DE3163'
    },
    cardSix: {
        backgroundColor: '#008080'
    },
    cardSeven: {
        backgroundColor: '#DE3163'
    }
})