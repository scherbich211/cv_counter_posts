import React, { useState, useEffect }  from "react";
import { Text, TouchableOpacity, View, _ScrollView } from "react-native";
import style from "./style1/style1";
import useDidMountEffect from "./useDidMountEffect"

const Counter = ({title, defaultValue, saveCount }) => {
    const [count, setCount] = useState(defaultValue);
    const [color, setColor] = useState('#EBE8DB');
    const increment = () => {
      setCount(prevCount => prevCount + 1)
    };
    const decrement = () => {
      setCount(prevCount => prevCount - 1)
    };
    useEffect(() => {
      saveCount(title,count)
    }, [count])
    const changeColor = () => setColor(color === '#EBE8DB' ? '#EDD30B' : '#EBE8DB')
//-----------------------------------------
/*     useEffect(() => {
      setCount(defaultValue)
      }, [defaultValue])
      
      useDidMountEffect(() => {
      console.log('Count:', count)
      saveCount(title, count);
      }, [count]); */
//-------------------------------------------------------------------------

    return (
      <View>
        <View style={{ height: 100 }}>
          <Text style={{...style.greater, color: color, marginTop: 50}}> {title} </Text>           
          <Text style={count == 0 ? style.greater : style.less}> {count} </Text>
        </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={style.button} 
              onPress={count == 0 ? prevCount => prevCount : decrement}>
              <Text style={style.buttonText}> - </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} 
              onPress={increment}>
              <Text style={style.buttonText}> + </Text>
            </TouchableOpacity>
          </View>
          {/* <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity style={style.button} 
              onPress={()=>save()}>
              <Text style={style.buttonText}> Save </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} 
              onPress={()=>remove}>
              <Text style={style.buttonText}> Delete </Text>
            </TouchableOpacity>
          </View> */}
          <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity style={style.button} 
              onPress={changeColor}>
              <Text style={style.buttonText}> Color </Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  };
  export default Counter


    // const saveArticle = async (key,value) =>{
    //   try {
    //     await AsyncStorage.setItem(key,value);
    //     getAllData();
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
    
    // const getAllData = () =>{
    //   AsyncStorage.getAllKeys().then((keys) => {
    //     return AsyncStorage.multiGet(keys)
    //       .then((result) => {
    //         console.log(result);
    //       }).catch((e) =>{
    //         console.log(e);
    //       });
    //   });
    // }