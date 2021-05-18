// import { Dimensions, StyleSheet } from "react-native";



// const screenHeight = Dimensions.get('screen').height;

// //---------------------------------------------------------------------------------------------
// const style = StyleSheet.create({
// 	listBack: {
// 		flex: 1,
// 		backgroundColor: '#EAE8E8',
// 	},
// 	detailsInBack: {
// 		/* flex: 1,
// 		flexDirection: 'row',
// 		width: 50,
// 		height: 50,
// 		backgroundColor: '#EAE8E8', */

// 	},
// 	opacity: {
// 		height: 1000,
// 		backgroundColor: "black",
// 	},
// 	photo: {
// 		flex: 1,
// 		resizeMode: 'cover',
// 	},
// 	photoContainer: {
// 		height: screenHeight * 0.7,
// 		color:"red",
// 	},
// 	aboutMe_contacts_hobby: {
		
// 	},
// 	text_little: {
		
// 	},
// 	name: {
		
// 	},
// 	startCareer: {
		
// 	},
// 	main_title: {
		
// 	},
// 	main_text: {
		
// 	},
// })
// export default style
//-------------------------------------------------------

import { Dimensions, StyleSheet } from "react-native"
const screenHeight = Dimensions.get('screen').height
const style = StyleSheet.create({
	listBack: {
		flex: 1,
		backgroundColor: '#EAE8E8',
	},
	listItem: {
		flexDirection: 'row',
		marginLeft: 10,
		alignItems: 'center'
	},
	opacity:{ // rename to blackout
		flex: 1,
		backgroundColor:"black",
		opacity: 0.3,
	},
	photo: {
		flex: 1,
		//position:"relative",
	},
	photoContainer: {
		height: screenHeight * 0.7,
		
	},
	aboutMe_contacts_hobby: { // aboutMeContactsHobby || about_me_contacts_hobby
		marginLeft:15,
		fontStyle: 'italic',
		color: "blue",
		marginRight:50,
		fontSize:20,
		textDecorationLine: "underline",
	},
	text_little: {
		marginLeft:6,
		fontSize:15,
		lineHeight: 25,
		letterSpacing: 1,
	},
	name: {
		marginTop:'15%',
		color: "white",
    	fontSize: 42,
    	fontWeight: "bold",
    	textAlign: "center",
    	backgroundColor: "#001225a0",
		position: 'absolute'
	},
	startCareer: {
		marginTop:20,
		textAlign: "center",
		fontSize: 42,
		fontWeight: "bold",
		textShadowColor: "gold",
		textShadowOffset: { width: 0.5, height: 1},
		textShadowRadius: 2,
	},
	main_title: {
		marginLeft:15,
		fontStyle: 'italic',
		marginTop:20,
		textDecorationLine: "underline",
		textAlign: "left",
		fontSize: 23,
		fontWeight: "bold",
		textTransform: "uppercase",
	},
	main_text: {
		marginLeft:6,
		marginTop:5,
		fontSize: 18,
		lineHeight: 25,
		letterSpacing: 1
	},
	point:{
		borderRadius: 12,
		height:8,
		width:8,
		backgroundColor:"#001225a0",
	}, 
	hobby:{
		marginLeft:6,
		fontSize:15,
		lineHeight: 25,
		letterSpacing: 1,
	},
})
export default style
