import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import HomePage from './screens/home';
import AnalysisPage from './screens/analysis';
import {MaterialIcons} from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle:{
        backgroundColor:"#27303D"
    
      }
    }}
     >
      
      <Tab.Screen
        name="Main"
        component={HomePage}
        options={{
          headerTitle: "Water Tracker",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
           
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 5,
          },
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#27303D"
          },
          headerRight: () => (
            <MaterialIcons
              name="settings"
              size={24}
              color="#fff"
               style={{ marginRight: 10 }}

            />
          ),
        }}
      />
      <Tab.Screen
      
        name="Analysis"
        component={AnalysisPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-line" color={color} size={30} />
          ),
          headerTitle: "Water Tracker",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 5,
          },
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#27303D"
          },
          headerRight: () => (
            <MaterialIcons 
              name="settings"
              size={24}
              color="#fff"
              style={{ marginRight: 20 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
