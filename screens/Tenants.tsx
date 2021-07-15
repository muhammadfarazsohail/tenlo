import * as React from "react";
import { useState } from "react";
import * as firebase from "firebase";
import {
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "../navigation";

export default function Tenants({ props }) {
  //{navigation,route}

  //console.log(route.params.Email);
  //console.log(data);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <SafeAreaProvider>
        <Text style={styles.title}>Name </Text>
        <Text style={styles.TextStyle}>
          John Doe{/*props.route.params.id*/}{" "}
        </Text>
        <Text style={styles.title}>Rented House </Text>
        <Text style={styles.TextStyle}>
          1234 Imagined Street{/*props.route.params.id*/}{" "}
        </Text>
        <Text style={styles.title}>Landlord</Text>
        <View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text>Landlord Info</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              props.navigation.navigate("Chat", { recid: 1 }); // Currently hardcoded id.
            }}
          >
            <Text>Contact Landlord</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
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
    color: "#006400",
    alignSelf: "center",
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
    width: "30%",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 0,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 5,
    backgroundColor: "#C8F902",
    marginLeft: 3,
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
  TextStyle: {
    alignSelf: "center",
  },
});
