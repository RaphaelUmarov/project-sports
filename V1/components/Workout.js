import React, { useCallback, useContext, useState } from 'react'
import { Text, View, TextInput, Pressable,ScrollView, Keyboard, Button } from 'react-native'
import styles from '../style/style'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Modal, RadioButton } from 'react-native-paper';
import Header from './Header';
import Footer from './Footer';
import {WorkoutsContext,metric} from './context/context';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Workout({ navigation }) {
  const [radioval,setRadioval]= useState('Bike');
  const[distance,onChangeDist]=React.useState('')
  const[duration,onChangeDur]=React.useState('')
  const [visible,setVisible]=useState(false);
  const [date,setDate]=useState(new Date());
  const [show,setShow]=useState(false);
  const [mode,setMode]=useState('date');
  const workouts = useContext(WorkoutsContext).workout;
  const setworkouts = useContext(WorkoutsContext).setWorkout;
  const metrics=useContext(metric).metricType;
  let nameMetric='(in kilometers)';
  
  if (metrics==1.61){
    let nameMetric='(in miles)';
  }
  
  const addWorkout=()=>{
    if(distance<0 || duration <0 ||isNaN(+distance+1)||isNaN(+duration+1)|| distance.length==0 || duration.length==0 || date.getFullYear==null){
      alert("There is a problem with the inputs");
    }
    else{
      alert("Workout added !");
      let temp =[];
      workouts.map(w=>temp.push(w));
      temp.push({id:temp.length+1,type:radioval,distance:distance,duration:duration,day:date.getDate(),month:date.getMonth()+1,year:date.getFullYear()});
      setworkouts(temp);
        }
  }
  const onChange=(e,selectedDate)=>{
    setDate(selectedDate);
    setShow(false);
    console.log({date});
  }
  
  const showMode=(modeToShow)=>{
    setShow(true);
    setMode(modeToShow);
  }
  
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Add Workout</Text>
      <RadioButton.Group onValueChange={newValue => setRadioval(newValue)}value={radioval} style='row'>
        <View >
          <Text style={styles.header}><MaterialCommunityIcons size={25} name="bike-fast"></MaterialCommunityIcons>  Bike</Text>
          <RadioButton value='Bike'/>
        </View>
        <View >
          <Text style={styles.header}><MaterialCommunityIcons size={25} name="skate"></MaterialCommunityIcons>  Ice Skating</Text>
          <RadioButton value='Ice Skating'/>
          
        </View>
        <View >
          <Text style={styles.header}><MaterialCommunityIcons size={25} name="swim"></MaterialCommunityIcons>  Swimming</Text>
          <RadioButton value='Swim'/>
          
        </View>
      </RadioButton.Group>  
      <Text style={styles.header}>Distance {metrics==1 ? "(in kilometers)" : "(in miles)"} :</Text>
      <Pressable height={80}>
      <TextInput style={styles.input} 
        onChangeText={onChangeDist} 
        value={distance}
        keyboardType='numeric'>
        </TextInput>
      </Pressable>
        <Text style={styles.header}>
          Duration (in minutes) : 
        </Text>
        <Pressable height={80}>
        <TextInput style={styles.input} 
          onChangeText={onChangeDur} 
          value={duration}
          keyboardType='numeric'>
        </TextInput>
        </Pressable>
        <Pressable width={300} style={styles.button}>
        <MaterialCommunityIcons size={75} name='calendar-plus'/>
        <Button title='Show Date Picker'  onPress={()=>showMode('date')}></Button>
        {show &&(
            <DateTimePicker  
            style={styles.button}
            value={date} 
            mode={mode}
            onChange={onChange}
            />
          )}
      </Pressable>
      <Pressable width={300} style={styles.button} onPress={()=>addWorkout()}><MaterialCommunityIcons  size={75} name='plus-box-outline'></MaterialCommunityIcons><Text>Add Workout</Text></Pressable>
      </View>
      </ScrollView>
    )
}