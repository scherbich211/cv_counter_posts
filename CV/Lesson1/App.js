//-------------------------right class--------------
/* import React from 'react';
import { View,Text, TouchableOpacity, Alert } from 'react-native';
import style from './style1/style1'

class Counter extends React.Component {
  state = { count: 0 };

  setCountPlus = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
  )
  setCountMinus = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count - 1 })
  )
  render() {
    const { count } = this.state;
    return (
      <View style={style.bg}>
        <View style={{ height: 100 }}>
          <Text style={count == 0 ? style.greater : style.less}>You clicked {count} times</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={style.buttonMinus} 
            onPress={count == 0 ? this.count : this.setCountMinus}>
            <Text style={style.buttonText}> - </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonPlus} onPress={this.setCountPlus}>
            <Text style={style.buttonText}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const App = () => (
  <Counter />
);
export default App; */
//-------------------------right FUNCTION--------------

import React, { useState, useEffect, useRef }  from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, AppState, _ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Counter from "./Counter"
import style from "./style1/style1";

/* const App = () => (
  <ScrollView style={style.bg}>
    <Counter title = 'Not bad variant' defaultValue = {8} onChange={(value)=>console.log(value)}/>
  </ScrollView>
);
export default App; */

function App(){
const [counters,setCounters] = useState()
//-----------------Save---------------------------------------------------

/*   const save = async () =>{
    try {
      await AsyncStorage.setItem("Counter", Counter ({title, defaultValue , onChange, ValueCount}))
      console.log('save')
    } catch (error) {
      console.log('error1') 
    }
  }
  const load = async () =>{
    try {
      let Counter = await AsyncStorage.getItem("Counter")
      if(Counter !== null){
        setCount(Counter)
      }
    } catch (error) {
      console.log('error2') 
    }
  }
  const remove = async () => {
    try {
      await AsyncStorage.removeItem("Counter")
    } catch (error) 
      console.log('error3')
    } finally {
      setCount(Counter({defaultValue}))
    }
  }

  useEffect(() => {
   load() 
  },[]) */
  const  _storeData = async (title,count) => {
    try {
        await AsyncStorage.setItem(title,count+'')
        const counter = await AsyncStorage.getItem(title);
        console.log(title + ' ' + counter + ' saved');
    } catch (error) {
        console.log(error)
    }
  }
  
  const  _retrieveData = async () => {
  try {
      const titles = await AsyncStorage.getAllKeys();
      console.log(titles)
      const cachedCounters = await Promise.all(titles.map(async (title) => (
        {
          title,
          value: +await AsyncStorage.getItem(title)
        }
        )))
      console.log(cachedCounters)
      
      // const value = +await AsyncStorage.getItem();
      if (value !== null) {
          console.log(value);
      }
  } catch (error) {
      console.log('error2')
  }
  }

  useEffect(() => {
    _retrieveData()
   },[])
//-----------------Save---------------------------------------------------

//-------------active/background--------------------------------------

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!");
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log("AppState", appState.current);
  };
//-------------active/background--------------------------------------

//-------------Save+active/background--------------------------------------
// if(appState.current.match(/inactive|background/)){
//   _storeData()
// }


//-------------Save+active/background--------------------------------------

  return (
    <ScrollView style={style.bg}>
      <Text style={style.less}>Current state is: {appStateVisible}</Text>
      <Counter title = 'White' defaultValue = {8} saveCount={(title,count)=>_storeData(title,count)}/>
      <Counter title = 'Black' defaultValue = {9} saveCount={(title,count)=>_storeData(title,count)}/>

    </ScrollView>
  )
}

export default App






//------------------------------------------------------------------------------------------------------------

/* 
import React ,{useEffect, useState}from 'react';
import { View, StyleSheet, Text, TouchableOpacity,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Counter from './Counter';
import style from './style1/style1';


function App(){
const [counters, setCounters] = useState([
{
defaultValue: 5,
title: "Белые"
},
{
defaultValue: 1,
title: "Красные",
}
]);

const saveData = async (title,count) => {
try {
await AsyncStorage.setItem(title,count)
} catch (e) {
console.log(e)

}
}
const readData = async () => {
try {
const titles = await AsyncStorage.getAllKeys();

let cachedCounters = await Promise.all(titles.map(async(title) => (
{
title,
defaultValue: +await AsyncStorage.getItem(title),
}
)));

if (titles.length > 0) {
cachedCounters = counters.map((counter, index) => ({...counter, ...cachedCounters[index]}))
setCounters(cachedCounters)
}
} catch (e) {
console.log(e)
}
}

useEffect(() => {
readData()
}, [])

const clearStorage = async () => {
try {
await AsyncStorage.clear()
} catch (e) {

}
}

console.log(counters)
console.log("rendered")
return(
<ScrollView style={style.bg}>
{counters.map((counter, index) =>
<Counter
key={index}
title={counter.title}
defaultValue = {counter.defaultValue}
saveCount={(title, count) => saveData(title,count)} />
)}
</ScrollView>
);
}

export default App */