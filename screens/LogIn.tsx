import * as React from 'react';
import {useState} from 'react';
import * as firebase from 'firebase';
import { StyleSheet,Image, Button,Alert, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useLinkProps } from '@react-navigation/native';
import Navigation from '../navigation';

export default function LogIn(props) {
  const [Email, setEmail] = useState('');
     const [Password, setPassword] = useState('');

  return (
    <ScrollView>
    <View style={styles.container}>
    <View >
      <Image style={styles.tinyLogo} source={require('../assets/images/logoG.png')} />
      {/* <Text style={styles.title}>Log In</Text> */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/LogIn.tsx" /> */}
      </View>
      
      {/* Email placeholder*/}
      <View style={styles.inputView}>
      <TextInput style={styles.TextInput}
        placeholder="Email"
        placeholderTextColor="#003f5c"
        onChangeText={(Email) => setEmail(Email)}
        />
        </View>
{/* Password placeholder*/}
        <View style={styles.inputView}>
     <TextInput style={styles.TextInput}
        placeholder="Password"
        placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(Password) => setPassword(Password)}
        />
        </View>


        <TouchableOpacity>
  <Text style={styles.forgot_button}>Forgot Password?</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.loginBtn} onPress={()=>props.navigation.navigate('Landlord')}>
  <Text style={styles.loginText}>Log In</Text>
</TouchableOpacity>
   
    
  
    </View>
    </ScrollView>
  );
}
{/*backgroundColor: "#fff", */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn:
 {
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:"#C8F902",
 },
 inputView: {
  backgroundColor: "#D0F0C0",
  borderRadius: 30,
  width: "70%",
  height: 45,
  marginBottom: 20,
  alignItems: "center",
},
loginText:{
  color:'#003f5c'
},

TextInput: {
  height: 50,
  flex: 1,
  padding: 10,
  marginLeft: 20,
},
});

 {/* // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional */}
  var firebaseConfig = {
    apiKey: "AIzaSyCRFEKyWJ3ajV-TiXCaXtD0DdqO3g75CyA",
    authDomain: "tenlo-project.firebaseapp.com",
    databaseURL: "https://tenlo-project-default-rtdb.firebaseio.com",
    projectId: "tenlo-project",
    storageBucket: "tenlo-project.appspot.com",
    messagingSenderId: "826972459172",
    appId: "1:826972459172:web:9e56eaa69a32eeccf8d631",
    measurementId: "G-DLXVLF3G3F"
  };
  {/* // Initialize Firebase */}
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
