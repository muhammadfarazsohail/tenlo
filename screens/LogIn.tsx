import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Switch,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import firebase from "firebase";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useLinkProps } from "@react-navigation/native";
import Navigation from "../navigation";
import EmailValidator from "email-validator";

export default function LogIn({ navigation, route }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // console.log(route);

  function loginReq(Email, Password, bval) {
    let userType = "tenant";
    if (bval === true) userType = "landlord";

    // Check if email and password are valid
    if (!EmailValidator.validate(Email)) {
      Alert.alert("Please enter a valid email");
      return;
    }

    if (Password.length <= 3) {
      Alert.alert("Password must be of length 4 or greater");
      return;
    }

    // Check is user exists in the database
    let isUser = false;
    let isCorrectPass = false;
    // Initially userType because we don't it to give false alerts.
    let getType = userType;
    let query = firebase.database().ref("Users/");
    query
      .once("value")
      .then(function (snapshot) {
        snapshot.forEach((data) => {
          // Key is the unique value for each entry under which information users is present
          let key = data.key;
          // Grab the email from each user
          let emailData = data.val().email;
          if (emailData === Email) {
            if (data.val().passwd === Password) isCorrectPass = true;
            isUser = true;
            // To ensure a tenant does not login as a landlord and vice versa
            getType = data.val().userType;
            // The following return breaks out of the forEach (we don't want to continue iterating after we found the email)
            return true;
          }
          console.log(emailData);
        });

        if (getType !== userType) {
          Alert.alert(
            "Please choose the correct type of user (landlord or tenant)"
          );
          return;
        }

        // If the user exists in the database, log in
        if (isUser && isCorrectPass) {
          if (bval) {
            //login for landlord part goes here
            navigation.navigate("Landlord", { id: 100 });
          } else {
            //login for tenants goes here
            navigation.navigate("Tenants", { id: 100 });
          }
        } else {
          Alert.alert("Username or Password is incorrect");
        }
      })
      .catch((error) => {
        console.log("error ", error);
      });
  }

  return (
    <ScrollView style={{backgroundColor:"white"}}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/images/logoG.png")}
          />
          {/* <Text style={styles.title}>Log In</Text> */}
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          {/* <EditScreenInfo path="/screens/LogIn.tsx" /> */}
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

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        {/*switch to shift from tenant to landlord */}
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
            loginReq(Email, Password, isEnabled);
          }}
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
{
  /*backgroundColor: "#fff", */
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
