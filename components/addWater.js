import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput,Alert ,TouchableWithoutFeedback, Keyboard} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AddWater({ addWater, setDrinkedWaterAmount}) {
  const [waterAmount, setWaterAmount] = useState(0);
  const [toggleCustomInput, setToggleCustomInput] = useState(false);
  const [customAmount, setCustomAmount] = useState(0);

  const setInputValue = (text) => {
    setWaterAmount(parseInt(text));
  };

  const handleCustomAmountInput = (text) => {
    if( (text === "" || isNaN(text) || parseInt(text, 10)===false ) <= 0){
      setCustomAmount(parseInt(text, 10));
    }
    else{
      setCustomAmount(0);
         }
   };

  const handleToggleCustomInput = () => {
    setToggleCustomInput(!toggleCustomInput);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    // You can reset the input field and toggle state if needed
    if (customAmount === "" || isNaN(customAmount) || parseInt(customAmount, 10) <= 0) {
      Alert.alert('Error', 'Please enter a valid target');
      setCustomAmount(0);
    }
    else {
    addWater(parseInt(customAmount), setDrinkedWaterAmount);
    console.log("Submitted:", customAmount);
    setCustomAmount(0);
    setToggleCustomInput(false);
  }
  };
  

  return ( 
       <View> 
        <View style={styles.addWaterContainer}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Add a portion of water</Text>
          <MaterialCommunityIcons name="water-plus" size={40} color="white" />
        </View>
        <View style={styles.buttonsAligner}>      
          <TouchableOpacity style={[styles.cupButton, { flexDirection: 'row', alignItems: 'center' }]}>  
            <MaterialCommunityIcons name="cup-water" size={25} color="white" />
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>CUP</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={[styles.cupButton, { flexDirection: 'row', alignItems: 'center' }]}>  
            <MaterialCommunityIcons name="bottle-soda" size={25} color="white"  />
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>BOTTLE</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 30 }}></View>
  
        <TouchableOpacity style={styles.customAmount} onPress={handleToggleCustomInput}>  
          <MaterialCommunityIcons name="water-plus" size={25} color="white"  />
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Custom Amount</Text>
        </TouchableOpacity>
        {toggleCustomInput && (
          <View style={styles.inputContainer}> 
            <View style={{flexDirection:'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Enter Amount"
                keyboardType="numeric"
                onChangeText={handleCustomAmountInput}
                value={customAmount.toString()}
              />
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
   );
  
}
const styles = StyleSheet.create({ 
  cupButton: {
    marginHorizontal: 20,
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2076FF',
    borderRadius: 15,
    padding: 5,
    marginTop: 20,
  },
  buttonsAligner:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addWaterContainer: {
    justifyContent:'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  customAmount:{
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2076FF',
    borderRadius: 15,
    padding: 5,
    marginTop: 20,
    marginLeft: 40,
  },
  inputContainer: {
    alignItems: 'center', // Center the input horizontally
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#244A84",
    borderRadius: 5,
    width: 200,
    textAlign: 'center',
    color: 'white',
  },
  submitButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  submitText: {
    color: "white",
    fontSize: 18,
    textAlign:"left",
    fontWeight: "bold",
  },
});
