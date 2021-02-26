import React, { useState } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import { StyleSheet,Image, Button,Alert, TouchableOpacity } from 'react-native';

export default function changeAddress(props) {
    const [Address, setAddress] = useState("");
    const [Apartment, setApartment] = useState("");
    const [Postal, setPostal] = useState("");
    const [City, setCity] = useState("");
    const [Province, setProvince] = useState("");

    const [Country, setCountry] = useState("");
    const [Phone, setPhone] = useState("");
    return(
        <SafeAreaProvider style={{paddingTop:100,backgroundColor:"white"}}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Address Preferences</Text>
            {/**address */}
            <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Address"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(Address) => setAddress(Address)}
          />
        </View>
        {/**Apartment */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Apartment"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(Apartment) => setApartment(Apartment)}
          />
        </View>
        {/**Postal */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Postal Code"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(Postal) => setPostal(Postal)}
          />
        </View>
        {/**City */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="City"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(City) => setCity(City)}
          />
        </View>
        {/**Province */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Province"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(Province) => setProvince(Province)}
          />
        </View>
        {/**Country */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Country"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(Country) => setCountry(Country)}
          />
        </View>
        {/**Phone */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Phone"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(Phone) => setPhone(Phone)}
          />
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            //function here
          }}
        >
          <Text style={styles.loginText}>Confirm Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            props.navigation.navigate("Tenants");
          }}
        >
          <Text style={styles.loginText}>Go Back</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaProvider>

    );
    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color:"#006400",
      marginBottom:10,
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
      marginTop: 10,
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