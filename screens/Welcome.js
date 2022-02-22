import * as React from 'react';

import { Text, View, StyleSheet,TouchableOpacity,
SafeAreaView, Platform, StatusBar, Image,  ImageBackground, ScrollView
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';
import { FlatList } from 'react-native-gesture-handler'; 
import AppLoading from 'expo-app-loading';
import Recipe from './recepies'

let customFonts = {
  JustAnotherHand:require("../assets/JustAnotherHand-Regular.ttf"),
 AveriaSansLibreBold:require("../assets/AveriaSansLibre-Bold.ttf"),
 AveriaSansLibre:require("../assets/AveriaSansLibre-Regular.ttf")

}

export default class Welcome extends React.Component{
  constructor(props){
    super (props)
    this.state ={
      fontsloaded:false
    }
  }
  async loadFonts(){
  await Font.loadAsync(customFonts)
  this.setState({
    fontsloaded:true
  })
}
componentDidMount(){
  this.loadFonts()
}
render(){
  if(!this.state.fontsloaded){
    return <AppLoading/>
  }
  else{
  return (

    <View style = {styles.container}>
    <SafeAreaView style = {styles.droidSafeArea}/>
    <ImageBackground style= {styles.backgroundImage}
    source={require("../assets/bg1.jpg")}
    >
    <View style= {styles.appTitle}>
    <Image source={require("../assets/logo.png")}
    style={styles.appIcon}/>
    <View style= {styles.appTitleTextContainer}>
    <Text style= {styles.welcomeText} > Welcome To </Text>
     <Text style={styles.appTitleText}>Foodie Pedia</Text>
    </View>
    </View>
   <TouchableOpacity style = {styles.button} 
   onPress= {
     ()=>{
       this.props.navigation.navigate("Recepies")
     }
   }>
   <Text style = {styles.buttonText}>Next</Text>
   
   </TouchableOpacity>
    </ImageBackground>
    </View>
  
  )
  }
}

}




const styles = StyleSheet.create(
  {
    container: { flex: 1, },

  backgroundImage: { flex: 1, resizeMode: 'contain', },
  appIcon:{
    height:RFValue(130),
    width:RFValue(130),
    marginTop:100,
    marginBottom:60,
    alignSelf:"center",
    borderColor:"#fbdcc7",
    borderWidth:1,
    resizeMode:"contain",
    borderRadius:15

    
  },
  appTitleText:{
    color:"#ffcba4",
    fontSize:RFValue(45),
    fontFamily:"AveriaSansLibre",
    letterSpacing:-3.5,
    textAlign:"center",
    aliignSelf:"center"
  },
  appTitleTextContainer:{
    flex:0.7,
    alignSelf:"center",
    justifyContent:"center"
  },
 welcomeText:{
   color:"#fbdcc7",
   fontSize:RFValue(30),
   fontFamily:"AveriaSansLibre",
   alignSelf:"center",
   alignText:"center"
   
 },
 droidSafeArea:{
   marginTop:Platform.OS==="android" ? StatusBar.currentHeight:RFValue(35)
 },
 appTitle:{
   flex:0.4,
   justifyContent:"center",
   alignItems:"center"
 },
 iconImage:{
   width:"100%",
   height:"100%",
   resizeMode:"contain"
 },
 button:{
   marginTop: RFValue(200),
   alignSelf: 'center',
   borderRadius: 10,
   borderWidth: 3,
   width: '80%',
   borderColor: '#fbdcc7',
   alignItems: 'center',
   justifyContent: 'center',
 },
 buttonText:{
   color: '#ffcba4',
   fontFamily: 'AveriaSansLibre',
   fontSize: RFValue(30),
   alignSelf: 'center',
 }
  }
  
)


