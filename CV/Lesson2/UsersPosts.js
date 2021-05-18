import React,{  } from 'react';
import {Text, View} from 'react-native';
import style from './style2/style2'

function UsersPosts({posts}){
    return (
        <View style={{ flex: 1, padding: 5 }}>
            {posts.map((item) => (
                <View key={item.id} style = {style.container}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={style.info}> id : {item.id}</Text>
                        <Text style={style.info}> userId : {item.userId}</Text>
                    </View>
                    <Text style={style.info}> title : {item.title}</Text>
                    <Text style={style.info}> body : {item.body}</Text>
                </View>
            ))}
        </View>
    );
};

export default UsersPosts