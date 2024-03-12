
import React, { useEffect, useContext, useState } from 'react'
import { Text, View,TextInput,Button, ScrollView,Pressable } from 'react-native'
import styles from '../style/style'
import { RadioButton } from 'react-native-paper';
import {WorkoutsContext,metric} from './context/context';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Lists({}) {
  const workouts = useContext(WorkoutsContext).workout;
  const setworkouts = useContext(WorkoutsContext).setWorkout;
  const metrics=useContext(metric).metricType;
  function showTotal(){
     let totalbike=0;
     let totalskate=0;
     let totalswim=0;
    {workouts.map(w =>{
    if(w.type=='Bike'){
      totalbike+=Number(w.distance);
    }
    else if (w.type=='Ice Skating'){
      totalskate+=Number(w.distance);
    }
    else{
    totalswim+=Number(w.distance);
    }}
    )}
    return(
      <>
      <Pressable width={300} style={styles.button}>
      <Text><MaterialCommunityIcons size={25} name="bike"></MaterialCommunityIcons>    {Math.round(totalbike*metrics)} {metrics==1 ? "(in kilometers)" : "(in miles)"}</Text>
      </Pressable>
      <Pressable width={300} style={styles.button}>
      <Text><MaterialCommunityIcons size={25} name="skate"></MaterialCommunityIcons>   {Math.round(totalskate*metrics)} {metrics==1 ? "(in kilometers)" : "(in miles)"}</Text>
      </Pressable>
      <Pressable width={300} style={styles.button}>
      <Text><MaterialCommunityIcons size={25} name="swim"></MaterialCommunityIcons>    {Math.round(totalswim*metrics)} {metrics==1 ? "(in kilometers)" : "(in miles)"}</Text>
      </Pressable>
      </>
    )
  }
  function showWorkout(w){
     var icon='';
    if(w.type=='Bike'){
      icon='bike';
    }
    else if(w.type=="Ice Skating"){
      icon="skate";
    }
    else{
      icon='swim';
    }
    return(
    <Pressable width={600} height={500} style={styles.button2} key={w.id}>
          <MaterialCommunityIcons size={25} name={icon}></MaterialCommunityIcons>
          <Text>{w.type}</Text>
          <Text>{Math.round(w.distance*metrics)}
          {metrics==1 ? "(in kilometers)" : "(in miles)"}
          </Text>
          <Text>{w.duration} minutes </Text>
          <Text>Date : {w.day}-{w.month}-{w.year}</Text>
        
    </Pressable>
    )
  }
 return(
  
    <ScrollView>
    <Text style={styles.header}>Total of distance :</Text>
    {showTotal()}
    <Text style={styles.header}>List of workouts :</Text>
    {workouts.map(a => showWorkout(a))}
    
    </ScrollView>
    
 )
}