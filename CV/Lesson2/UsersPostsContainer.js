import React,{ useEffect, useState } from 'react';
import {View} from 'react-native';
import UsersPosts from './UsersPosts';


function UsersPostsContainer({posts, filters}){
    const url = `https://jsonplaceholder.typicode.com/posts`
    const [data, setData] = useState([]);
    
    // console.log(posts)
    // console.log(filters)
    let newData = [...posts,...data]
    // console.log(newData)
    let result =[]
    if (filters != undefined){
        result = newData.filter(({ id }) => filters.includes(id));}
    else{
        result = newData
    }

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => setTimeout(() => setData(json), 5000))
        .catch((error) => console.error(error))
    }, []);
    return (
        
        <View>
            <UsersPosts posts = {result}/>
        </View>
    )
}

export default UsersPostsContainer
