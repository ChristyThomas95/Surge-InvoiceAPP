import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image 
      style={{
        width:600,
        height:300
      }}
      source={require('../assets/logo.png')}/>
       <TouchableOpacity style={styles.button}>
            <Text>Create Invoice</Text>
       </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE9DA',   
    },
    button:{
        width: 100,
        height: 40,
        backgroundColor: '#93BFCF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        elevation: 10,
        
        
       
    }
    
   
    
})