import { StyleSheet, Text, View,ScrollView,Button,TextInput,Alert } from 'react-native'
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import dateFormat from 'dateformat';
import { InvoiceMaker } from './invoiceprint';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default function CreateBill() {
    const [name, setName] = useState('');
    const [Address, setAddress] = useState('');
    const [Phone_No, set_Phone_No] = useState('');
    const [Product, Set_Product] = useState('Apples');
    const [Quantity, setQuantity] = useState('');
    const [Delivery, setDelivery] = useState('');
    const now = new Date();
    const [Invoice,setInvoice] = useState( dateFormat(now, "yymmddhhMss") );
    const [Total, setTotal] = useState('');
    const [Received_Balance,set_Received_Balance] = useState('');
    const [PaymentMethod,setPaymentMethod] = useState('Credit');
    const [Remaining_Balance,set_Remaining_Balance] = useState('Paid');
    const [selected_Printer, setSelected_Printer] = React.useState();

    const PrintToPdf =async()=> {
        let html = InvoiceMaker(name,
            Address,
            Phone_No,
            Quantity,
            Invoice,
            Product,
            Total,
            Received_Balance,
            PaymentMethod,
            Remaining_Balance);

            try {
                const{uri} = await Print.printAsync({html});
                console.log("File Saved to ", uri);
                await shareAsync(uri,{UTI: '.pdf', mimeType: 'application/pdf'});
                setName('');
      setInvoice(dateFormat(now, "ddmmyyhhMss"));
      setTotal('');
      setQuantity('');
      set_Received_Balance('');
      setAddress('');
      set_Phone_No('');    
            } catch (error) {
                Alert.alert("Thank you for using our app");

            }     
    }

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
            value={Address}
            onChangeText={(text) => setAddress(text)}
            placeholder= 'Address'
            style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>Delivery Notes</Text>
            <TextInput 
            value={Delivery}
            onChangeText={(text) => setDelivery(text)}
            placeholder= 'Optional Special Notes'

            style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>Phone Number</Text>
            <TextInput 
            value={Phone_No}
            keyboardType='number-pad'
            onChangeText={(text) => set_Phone_No(text)}
            placeholder= 'Phone Number'

            style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>Product : </Text>
            <View style={styles.PickerContainer}> 
                <Picker
                selectedValue={Product}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => Set_Product(itemValue)}  
                >
                        <Picker.Item label='Apples'value="Apples" />
                        <Picker.Item label='Banana'value="Banana" />
                        <Picker.Item label='Orange'value="Orange" />
                        <Picker.Item label='Peach'value="Peach" />
                        <Picker.Item label='Cranberry'value="Cranberry" />
                        <Picker.Item label='FingerLime'value="FingerLime" />
                        <Picker.Item label='Dates'value="Dates" />
                        <Picker.Item label='Cherry'value="Cherry" />
                        <Picker.Item label='Mango'value="Mango" />           
                </Picker>
            </View>    
        </View>
        <View style={styles.InputContainer}>
            <Text>Quantity</Text>
            <TextInput 
            value={Quantity}
            keyboardType='number-pad'
            onChangeText={(text) => setQuantity(text)}
            placeholder= 'Quantity'
            style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>Invoice</Text>
            <TextInput 
            value={Invoice}
            keyboardType='number-pad'
            onChangeText={(text) => setInvoice(text)}
            placeholder= 'Invoice'
            style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>Total</Text>
            <TextInput 
            value={Total}
            keyboardType='numeric'
            onChangeText={(text) => setTotal(text)}
            placeholder= 'Total $'
            style={styles.textInput}
            />
        </View>

        <View style={styles.InputContainer}>
            <Text>Amount Received: </Text>
            <TextInput 
            value={Received_Balance}
            keyboardType='numeric'
            onChangeText={(text) => set_Received_Balance(text)}
            placeholder= 'Amount Received $'
            style={styles.textInput}
            />
        </View>

        <View style={styles.InputContainer}>
            <Text>Amount receivable </Text>
            <TextInput 
            value={Remaining_Balance}
            keyboardType='numeric'
            onChangeText={(text) => set_Remaining_Balance(text)}
            placeholder= 'Amount Receivable $'
            style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>Payment Method: </Text>
            <View style={styles.PickerContainer}> 
                <Picker
                selectedValue={PaymentMethod}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setPaymentMethod(itemValue)}  
                >
                        <Picker.Item label='Credit'value="Credit" />
                        <Picker.Item label='Cash'value="Cash" />
                        <Picker.Item label='Card'value="Card" />                  
                </Picker>
            </View>
            <Button
            style={styles.button} 
            title="Create Invoice" onPress={PrintToPdf}/>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F0EEED',

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
    },
    PickerContainer:{
        marginTop:4,
        height:55,
        borderColor: '#000',
        borderWidth:1,
        boderRadius:4,
        padding:1,
        marginBottom:6

    },
    button:{
        marginTop:4,
        height:55,
        borderColor: '#000',
        borderWidth:1,
        boderRadius:10,
    },          
})