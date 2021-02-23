import * as React from 'react';
import {useState} from 'react';
import * as firebase from 'firebase';
import { StyleSheet,Image, Button,Alert, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function Chatroom({props}){

const data=props.router.params;
    return(
        <ScrollView>
            <SafeAreaProvider>
            <Text>Tenants: {data.id} </Text>
                <Text>Home Details: {data.id} </Text>
                <Text>Address: {data.id} </Text>
            </SafeAreaProvider>
        </ScrollView>
    );

}