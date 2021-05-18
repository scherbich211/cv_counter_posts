import { Dimensions, StyleSheet } from "react-native"
const screenHeight = Dimensions.get('screen').height
const style = StyleSheet.create({
    bg: {flex:1,backgroundColor: '#001225'  },
    line:{borderWidth: 1,borderColor:'blue',margin:10,marginTop:30,},
    less: { fontSize: 25, color: '#EBE8DB', fontWeight: 'bold', textAlign:'center', },
    greater: { fontSize: 25, color: '#f3845c', fontWeight: 'bold', textAlign:'center',textShadowColor: "gold",textShadowOffset: { width: 0.5, height: 1},textShadowRadius: 2, },
    button: {
      width: 150,
      height: 50,
      alignItems: 'center',
      paddingTop: 10,
      borderRadius: 10,
      backgroundColor: '#3498db',
      margin:30,
    },
    buttonText: {
      fontSize: 25,
      color: '#fff'
    },

  });
  export default style