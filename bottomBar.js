import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import HomePage from './screens/home';
import AnalysisPage from './screens/analysis';
import {MaterialIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={HomePage}
        options={{
          headerTitle: "Water Intake Tracker",
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
      <Tab.Screen
        name="Analysis"
        component={AnalysisPage}
        options={{
          headerTitle: "Water Intake Tracker",
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
