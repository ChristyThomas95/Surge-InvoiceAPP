import { StyleSheet, Text, View,ScrollView,TextInput } from 'react-native'
import React, {useState} from 'react'

export default function CreateBill() {
    const [name, setName] = useState('')
  return (
    <View style={styles.container}>
      <ScrollView>  
        <View style={styles.InputContainer}>
            <Text>Name</Text>
            <TextInput 
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder= 'Customer Name'
            style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>Street Address</Text>
            <TextInput 
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder= 'Address'
            style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>Delivery Notes</Text>
            <TextInput 
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder= 'Optional Special Notes'

            style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>Name</Text>
            <TextInput 
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder= 'Customer Name'
            style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>Name</Text>
            <TextInput 
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder= 'Customer Name'
            style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>Name</Text>
            <TextInput 
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder= 'Customer Name'
            style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>Phone Number</Text>
            <TextInput 
            value={name}
            keyboardType='number-pad'
            onChangeText={(text) => setName(text)}
            placeholder= 'Customer Name'
            style={styles.textInput}
            />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',

    },
    InputContainer:{
        marginTop:35,
        marginLeft:20,
        marginRight:20,    
    },
    textInput:{
        marginTop:4,
        height:40,
        borderColor: '#000',
        borderWidth:1,
        boderRadius:4,
        padding:6,
        marginBottom:6
    }    
       
})