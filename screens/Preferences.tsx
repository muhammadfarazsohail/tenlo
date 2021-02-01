import * as React from 'react';
import {useState} from 'react';
import * as firebase from 'firebase';
import { StyleSheet,Image, Button,Alert, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function Preferences({data}){
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [conPassword, setCPassword] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");

    const [Address, setAddress] = useState("");
    const [Apartment, setApartment] = useState("");
    const [Postal, setPostal] = useState("");
    const [City, setCity] = useState("");
    const [Province, setProvince] = useState("");

    const [Country, setCountry] = useState("");
    const [Phone, setPhone] = useState("");
    const [Tenant, setTenant] = useState("");
    

    return(
        <ScrollView>
            <Text>Tenants: {data.id} </Text>
                <Text>Home Details: {data.id} </Text>
                <Text>Address: {data.id} </Text>
        </ScrollView>
        
    );

}