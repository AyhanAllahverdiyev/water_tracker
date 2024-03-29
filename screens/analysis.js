import React from "react";
import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../styles/global";
import CalendarComponent from "../components/calendar";
export default function AnalysisPage() {
    return (
        <View style={globalStyles.container}>
            <Text style={{ color: "white", fontSize: 25, textAlign: "center",marginTop:20 }}>
                Intake History
            </Text>
         <CalendarComponent/>
   
        </View>

    );

}