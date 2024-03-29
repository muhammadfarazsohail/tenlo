import * as React from 'react';
import {useState} from 'react';
import * as firebase from 'firebase';
import { StyleSheet,Image, Button,Alert, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function Preferences({props}){
    
   

    
    const [Tenant, setTenant] = useState("");
    

    return(
      <SafeAreaProvider>
        <ScrollView style={{backgroundColor:"white"}}>
          <View style={styles.container}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => props.navigation.navigate("changePassword",{id:props.route.params.id}) }
        >
          <Text style={styles.loginText}>Change your Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => props.navigation.navigate("changeAddress",{id:props.route.params.id}) }
        >
          <Text style={styles.loginText}>Add or change Address Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => props.navigation.navigate("Personalinfo",{id:props.route.params.id}) }
        >
          <Text style={styles.loginText}>Change your Personal Information</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => props.navigation.navigate("Root") }
        >
          <Text style={styles.loginText}>Log Out</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        </SafeAreaProvider>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 0,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#C8F902",
  },
  inputView: {
    backgroundColor: "#D0F0C0",
    borderRadius: 0,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  loginText: {
    color: "#003f5c",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
});