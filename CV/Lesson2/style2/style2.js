import { Dimensions, StyleSheet } from "react-native"
const screenWidth = Dimensions.get('screen').width

const style = StyleSheet.create({
  container:{
    flexDirection:"row",
    marginLeft:5,
    marginBottom:15,
    marginTop:10,
    paddingBottom:15,
    borderWidth: 4,
    borderColor: "#f3845c",
    borderRadius: 10,
    flexDirection:"column",
    },
    info:{
    fontSize:20,
    textAlign: 'left',
    color:"#EBE8DB",
    fontStyle: 'italic',
    lineHeight:40,
    fontWeight:"bold",
    marginLeft:6,
    marginBottom:5,
    fontFamily:"sans-serif",
    letterSpacing:0.9,
    },
    button: {
      height: 50,
      alignItems: 'center',
      paddingTop: 10,
      borderRadius: 10,
      backgroundColor: '#3498db',
      marginTop: 15,
      alignSelf:'stretch'
      
    },
    buttonText: {
      fontSize: 25,
      color: '#fff'
    },
    block:{
      // flexDirection: "row",
      // justifyContent: "space-between",
      alignItems: 'center',
      marginBottom: 15,
      justifyContent: 'flex-start',
      flex: 1,
      // backgroundColor:'blue'
    
    },
    input: {
      // width: screenWidth*0.4 ,
      height: 50,
      borderWidth: 4,
      borderColor: "#3498db",
      borderRadius: 10,
      fontSize: 25,
      color: '#eee',
      paddingLeft: 10,
      margin: 15,
      marginBottom: 15,
      flexBasis: 150,
    },
    containerForm: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      // backgroundColor:'red'
    },
    form: {
      flexDirection: "row",
      alignItems: 'center',
      padding: 15,
      borderWidth: 1,
      borderColor: '#eee',
      borderRadius: 5,
      marginBottom: 10,
    },
    inputRow: {
      flexDirection: 'row',
    },
    
  });
  export default style