import React,{useState} from 'react';
import { View } from 'react-native';
import Workout from './components/Workout';
import Header from './components/Header';
import Lists from './components/Lists';
import Settings from './components/Settings';
import Footer from './components/Footer';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './style/style';
import {WorkoutsContext,metric} from './components/context/context';
const Tab = createBottomTabNavigator();

export default function App() {
  const [workout,setWorkout]= useState(
    [{
      id:1,
      type: "Bike",
      distance : 30,
      duration : 20,
      day : '1',
      month : '1',
      year : '2023'
  }, {
      id:2,
      type: "Ice Skating",
      distance : 30,
      duration : 80,
      day : '10',
      month : '3',
      year : '2024'
  },{
    id:3,
    type: "Swim",
    distance : 40,
    duration : 80,
    day : '2',
    month : '6',
    year : '2024'
    },
    {
      id:4,
      type: "Ice Skating",
      distance : 30,
      duration : 80,
      day : '6',
      month : '12',
      year : '2024'
    }]
  );
  const [metricType,setMetricType]= useState(1);
  return (
    //creation of the units and workout array for all of the components
    <metric.Provider value={{metricType,setMetricType}}>
    <WorkoutsContext.Provider value={{workout,setWorkout}}>
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Workout') {
              iconName = focused
                ? "heart"  
                : 'heart-outline';
            } else if (route.name === 'Lists') {
              iconName = focused
                ? "map"  
                : 'map-outline';
            } else if (route.name === 'Settings') {
              iconName = focused
                ? 'cog'
                : 'cog-outline';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons
               name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ff6f3c',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Workout" component={Workout}/>
        <Tab.Screen name="Lists" component={Lists} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
    </WorkoutsContext.Provider>
    </metric.Provider>
  );
}