import React, { useState } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import { StyleSheet,Image, Button,Alert, TouchableOpacity } from 'react-native';

export default function changeAddress({props}) {
    const [Address, setAddress] = useState("");
    const [Apartment, setApartment] = useState("");
    const [Postal, setPostal] = useState("");
    const [City, setCity] = useState("");
    const [Province, setProvince] = useState("");

    const [Country, setCountry] = useState("");
    const [Phone, setPhone] = useState("");
    
    <SafeAreaProvider>
        <ScrollView>
            
        </ScrollView>
    </SafeAreaProvider>
};
