import * as React from 'react';
import {useState} from 'react';
import * as firebase from 'firebase';
import { StyleSheet,Image, Button,Alert, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function Tenants({props}){//{navigation,route}

   

//console.log(route.params.Email);
//console.log(data);

    return(
        <ScrollView>
            <SafeAreaProvider>
                <Text>Tenants: {props.route.params.id} </Text>
                <Text>Home Details: {props.route.params.id} </Text>
                <Text>Address: {props.route.params.id} </Text>
            </SafeAreaProvider>

           
        </ScrollView>
        
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
      borderRadius: 25,
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

