import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";

 

export default function DailyTarget({onTargetSet}) {
 

  const [dailyTarget, setDailyTarget] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleSetTarget = () => {
    if (inputValue === "" || isNaN(inputValue) || parseInt(inputValue, 10) <= 0) {
      Alert.alert('Error', 'Please enter a valid target');
      return;
    }
    const target = parseInt(inputValue, 10);
    setDailyTarget(target);
    onTargetSet(target); 
  };
  return (
    <View style={styles.target}>
      <View style={{flexDirection:'row'}}> 
      <Text style={styles.textStyle}>Daily Water Target: </Text>
      {dailyTarget === 0 ? (
        <View>
             <TextInput
            style={styles.input}
            placeholder="Enter Target"
            keyboardType="numeric"
            onChangeText={(text) => setInputValue(text)} 
            value={inputValue.toString()}  
/>

          <TouchableOpacity onPress={handleSetTarget}>
            <Text style={styles.targetStyle}>Set Target</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.textStyle}>{dailyTarget}</Text>
      )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  target: {
    flexDirection: "column",
    alignItems: "center",
  },
  textStyle: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 15,
    color: "#244A84",
  },
  targetStyle: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 15,
    color: "orange",
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
  },
});
