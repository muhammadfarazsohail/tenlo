import * as React from 'react';
import {useState} from 'react';
import * as firebase from 'firebase';
import { StyleSheet,Image, Button,Alert, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function Chatroom({props}){

// const data=props.router.params;
    return(
        <SafeAreaProvider>
        <ScrollView>
            {/* {props.r.a.map(props.r.a =>)} */}
                
                <TouchableOpacity 
            // onPress={()=>{props.navigation.navigate("Chats",{props.route.params})}}
            >
                <Text>{props.route.params.name}</Text>
            </TouchableOpacity>
                
            
            
        </ScrollView>
        </SafeAreaProvider>

    );

}