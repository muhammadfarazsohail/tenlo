import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Image,
  Button,
  Alert,
  Switch,
  TouchableOpacity,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import firebase from "firebase";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

function writeUserData(fname, lname, email, passwd, isEnabled) {
  let actualUser = "tenants";
  if (isEnabled === true) actualUser = "landlords";

  firebase
    .database()
    .ref("Users/" + actualUser + "/" + email)
    .set({
      fname,
      lname,
      email,
      passwd,
    })
    .then((data) => {
      //success callback
      console.log("data ", data);
    })
    .catch((error) => {
      //error callback
      console.log("error ", error);
    });
}

export default function SignUp() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/images/logoG.png")}
        />
        {/* <Text style={styles.title}>Sign Up</Text> */}
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        {/* <EditScreenInfo path="/screens/SignUp.tsx" /> */}
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
            // onChangeText={(password) => setPassword(password)}
          />
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#C8F902" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text>Landlord</Text>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            writeUserData(FirstName, LastName, Email, Password, isEnabled);
          }}
        >
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
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
