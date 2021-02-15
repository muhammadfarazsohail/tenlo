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
//import * from 'react-native-icons'
import EmailValidator from "email-validator";

function writeUserData(fname, lname, email, passwd, conPassword, isEnabled) {
  let userType = "tenant";
  if (isEnabled === true) userType = "landlord";
  if (!EmailValidator.validate(email)) {
    Alert.alert("Please enter a valid email");
    return;
  }
  if (fname.length == 0) {
    Alert.alert("Please enter a first name");
    return;
  }
  if (lname.length == 0) {
    Alert.alert("Please enter a last name");
    return;
  }
  if (passwd.length <= 3) {
    Alert.alert("Password must be of length 4 or greater");
    return;
  }
  if (conPassword !== passwd) {
    Alert.alert("Password and confirmation of password must be equal");
    return;
  }

  // Check if user already exists in the database
  let doesUserExist = false;
  let query = firebase.database().ref("Users/");
  query
    .once("value")
    .then(function (snapshot) {
      snapshot.forEach((data) => {
        // Key is the unique value for each entry under which information users is present
        let key = data.key;
        // Grab the email from each user
        let emailData = data.val().email;
        if (emailData === email) {
          // User found in database
          doesUserExist = true;
          
          // The following return breaks out of the forEach (we don't want to continue iterating after we found the email)
          return true;
        }
        console.log(emailData);
      });

      if (doesUserExist) {
        // Separate for landlord and tenants or in other words, the same email can be used to register as a tenant
        // and a landlord, but the same email cannot be used to register as more than one tenant or landlord
        Alert.alert("User with this email already exists");
        return;
      }
      query
        .push({
          fname,
          lname,
          email,
          passwd,
          userType,
        })
        .then((data) => {
          //success callback
          console.log("data ", data);
          Alert.alert("Registration Successful!");
        })
        .catch((error) => {
          //error callback
          console.log("error ", error);
        });
    })
    .catch((error) => {
      console.log("error ", error);
    });
}

export default function SignUp() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [conPassword, setCPassword] = useState("");
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
            onChangeText={(conPassword) => setCPassword(conPassword)}
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
            writeUserData(
              FirstName,
              LastName,
              Email,
              Password,
              conPassword,
              isEnabled
            );
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
