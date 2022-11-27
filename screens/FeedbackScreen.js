import React from "react"
import {Component} from "react"
import {Text,View,TextInput,StyleSheet} from "react-native"

export default class FeedBack extends Component {
render(){
return(
  <View>
  <View>
  <Text>Write feedback to us and tell us what we should improve.</Text>
</View>
<View>
<TextInput
style={styles.inputText}
placeholder={"Write your feedback"}
placeholderTextColor={"#FFFFF"}
/>
</View>
  </View>
)}

}
const styles = StyleSheet.create({
inputText:{
 // flex:1,
  backgroundColor:"#50deaa",
  borderRadius:10,
  fontSize:25,
  justifyContent:"center",
  width:"75%",
  height:"100%"


}
})