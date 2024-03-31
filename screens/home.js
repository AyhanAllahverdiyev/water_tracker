import React,{useState} from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity,TouchableWithoutFeedback, Keyboard } from "react-native";
import globalStyles from "../styles/global";
import { MaterialIcons } from '@expo/vector-icons';
import WaterDrop from "../components/waterDrop";
import AddWater from "../components/addWater";
import DailyTarget from "../components/dailyTarget";

 
 export default function HomePage() {

  const addWater = (amount, setDrinkedWaterAmount) => {
    console.log('Adding water:', amount);
    setDrinkedWaterAmount(prevTarget => prevTarget + amount);
  }

const [usersDailyTarget, setUsersDailyTarget] = useState(0);
const [drinkedWaterAmount, setDrinkedWaterAmount] = useState(0);

const handleTargetSet=(target)=>{
    setUsersDailyTarget(target)
    console.log(target + " is the target")
}


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={globalStyles.container}>
      <Text style={styles.header}>Today</Text>

      
      <View style={styles.infoContainer}>
        <MaterialIcons
          name="info"
          size={20}
          color="#244A84"
          style={{ marginRight: 8, marginTop: 2 }}
        />
        <DailyTarget onTargetSet={handleTargetSet} />
        
      </View>
      

       <View style={styles.circleContainer}>
        <View style={styles.circle}>
           <WaterDrop targetAmount={usersDailyTarget.toString()} drinkedWaterAmount={drinkedWaterAmount} />
        </View>
      </View>
      <View>        
         <AddWater addWater={addWater} setDrinkedWaterAmount={setDrinkedWaterAmount}/>
      </View> 
       


    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    margin: 20,
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold'
  },
  textStyle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 15,
    color: "#244A84"
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circleContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 150, 
    backgroundColor: '#2076FF',  
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 12,
    borderColor: '#064FDA',  
  },
  
});
