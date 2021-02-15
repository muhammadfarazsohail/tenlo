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
            {/* FirstName placeholder*/}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="First Name"
            placeholderTextColor="#003f5c"
            onChangeText={(FirstName) => setFirstName(FirstName)}
          />
        </View>
        {/* Email placeholder*/}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Last Name"
            placeholderTextColor="#003f5c"
            onChangeText={(LastName) => setLastName(LastName)}
          />
        </View>
        {/* Email placeholder*/}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(Email) => setEmail(Email)}
          />
        </View>
        {/* Password placeholder*/}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(Password) => setPassword(Password)}
          />
        </View>
        {/* confirm Password  placeholder*/}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(conPassword) => setCPassword(conPassword)}
          />
          </View>
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
    borderRadius: 30,
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