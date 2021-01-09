import * as React from 'react';
import {useState} from 'react';
import { StyleSheet,Image, Button,Alert, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function LogIn() {
  const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
  return (
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
        onChangeText={(email) => setEmail(email)}
        />
        </View>
{/* Password placeholder*/}
        <View style={styles.inputView}>
     <TextInput style={styles.TextInput}
        placeholder="Password"
        placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
        />
        </View>


        <TouchableOpacity>
  <Text style={styles.forgot_button}>Forgot Password?</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.loginBtn}>
  <Text style={styles.loginText}>LOGIN</Text>
</TouchableOpacity>
   
    
  
    </View>
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
