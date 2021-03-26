import React, { useState } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import { StyleSheet,Image, Button,Alert, TouchableOpacity } from 'react-native';



export default function Personalinfo(props) {
    const [Email, setEmail] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");

return(
    <SafeAreaProvider style={{paddingTop:100,backgroundColor:"white"}}>
<ScrollView style={{backgroundColor:"white"}}>
  <View style={styles.container}>
  <Text style={styles.title}>Personal Information Preferences</Text>
  {/* OldPassword placeholder*/}
<View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Change Your Email"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(Email) => setEmail(Email)}
          />
        </View>
{/* Password placeholder*/}
<View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Change your First Name"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(FirstName) => setFirstName(FirstName)}
          />
        </View>
        {/* confirm Password  placeholder*/}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Change your Last Name"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(LastName) => setLastName(LastName)}
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
            props.navigation.navigate(props.route.params.id);
          }}
        >
          <Text style={styles.loginText}>Go Back</Text>
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