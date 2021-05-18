import React,{ useState } from 'react';
import { Text, View,TouchableOpacity , TextInput} from 'react-native';
import style from './style2/style2';

// no spaces between =
function UsersPostsForm({onSubmit}){
    const [id,setID] = useState('')
    const [userId,setUserId] = useState('')
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')

   
    const pressHandler =() => { // submitHandler
        const ID = Number(id) // переменные с маленькой буквы
        const userID = Number(userId)
        if(id.trim() && userId.trim() && title.trim() && body.trim()){
         if(Number.isInteger(ID) == false || Number.isInteger(userID) == false ){
            alert("not numbers")
        }else{
            onSubmit({
                id:ID,
                userId:userID,
                title:title,
                body:body})
            setID('')
            setUserId('')
            setTitle('')
            setBody('')
            }
         }else{
             alert('cant be null')
         }        
    }

    return(
    <View style={style.block}>
        <View style={{flexDirection: 'column'}}>
        <View style={style.inputRow }>
        <TextInput 
            style={style.input}
            onChangeText={setID}
            value={id}
            placeholder="input ID"
            placeholderTextColor="#fff"
            />
        <TextInput 
            style={style.input}
            onChangeText={setUserId}
            value={userId}
            placeholder="input userId"
            placeholderTextColor="#fff"
            />
        </View>
        <TextInput 
            style={style.input}
            onChangeText={setTitle}
            value={title}
            placeholder="input title"
            placeholderTextColor="#fff"
            />
        <TextInput 
            style={style.input}
            onChangeText={setBody}
            value={body}
            placeholder="input body"
            placeholderTextColor="#fff"
        />
        </View>
        <TouchableOpacity style={style.button}
            onPress ={pressHandler}>
            <Text style={style.buttonText}>Add</Text>
        </TouchableOpacity>
    </View>
    )
}
export default UsersPostsForm