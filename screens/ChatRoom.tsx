import * as React from 'react';
import {useState} from 'react';
import * as firebase from 'firebase';
import { StyleSheet,Image, Button,Alert, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function Landlord(){


    return(
        <ScrollView>
            <SafeAreaProvider>
                <Text>
                   I am ChatRoom page
                </Text>
            </SafeAreaProvider>
        </ScrollView>
    );

}