import React, { useEffect,useContext, useState } from 'react'
import { Text, View,TextInput,Button } from 'react-native'
import styles from '../style/style'
import { RadioButton } from 'react-native-paper';
import {WorkoutsContext,metric} from './context/context';
export default function Settings() {
  const [radioval,setRadioval]= useState(1);
  const metrics=useContext(metric).metricType;
  const setMetrics=useContext(metric).setMetricType;
    return (
      <>
      <Text style={styles.header}>Units :</Text>
    
      <View style={styles.button2}>
      <RadioButton.Group onValueChange={newValue => {setRadioval(newValue),setMetrics(newValue)}}value={radioval}>
        <View >
        <Text>Kilometers :</Text><RadioButton value={1}/>
          
        </View>
        <View >
          <Text>Miles :</Text><RadioButton value={1.61}/>
          
        </View>
      </RadioButton.Group>
      </View>
      </>
    )
  }