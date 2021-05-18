import React, {useState} from 'react';
import { ScrollView,View } from 'react-native';
import style from './style2/style2'
import UsersPostsContainer from './UsersPostsContainer';
import UsersPostsForm from './UsersPostsForm';


function App() {
    const [posts , setPosts]= useState([])

    const addPost = (id) => {
        setPosts(prev => [...prev, id])
    }
console.log(posts)
return (
<ScrollView style ={{backgroundColor: "#001225",}}>
    <View style={style.containerForm}>
        <UsersPostsForm onSubmit={addPost}/>
    </View>
    <UsersPostsContainer posts={posts} filters={[1]} />
</ScrollView>
);
}

export default App;
