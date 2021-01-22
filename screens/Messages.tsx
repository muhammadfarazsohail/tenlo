import * as React from "react";
import { useState } from "react";
import * as firebase from "firebase";
import {
  Dimensions,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

const { width, height } = Dimensions.get("window");

function sendText(text) {
  console.log(text);
  return (
    <View style={styles.msgContainer}>
      <View style={styles.userMsgBox}>
        <Text style={styles.message}>{text}</Text>
      </View>
    </View>
  );
}

export default function Messages({ props }) {
  const [Msg, setMsg] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.keyboard}
    >
      <ScrollView>
        <View style={styles.msgContainer}>
          <View style={styles.userMsgBox}>
            <Text style={styles.message}>{"hi"}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.inputView}
          value={Msg}
          onChangeText={(Msg) => setMsg(Msg)}
          blurOnSubmit={false}
          placeholder="Type a message"
          returnKeyType="send"
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            sendText(Msg);
            setMsg("");
          }}
        >
          <Text style={styles.submitButtonText}> SEND </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    minWidth: "100%",
    borderColor: "#cccccc",
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  keyboard: {
    flex: 1,
  },
  inputView: {
    margin: 2,
    paddingLeft: 15,
    flex: 1,
    height: 40,
    padding: 10,
    fontSize: 14,
    fontWeight: "400",
    shadowColor: "#3d3d3d",
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },
  TextInput: {
    flex: 1,
  },
  Spacing: {
    height: height - 50,
  },
  submitButtonText: {
    color: "#0a9ffc",
    fontSize: 14,
    fontWeight: "500",
  },

  submitButton: {
    backgroundColor: "#D0F0C0",
    padding: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#003f5c",
    alignItems: "center",
  },
  msgContainer: {
    padding: 10,
  },
  userMsgBox: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#DCF8C5",
    marginLeft: 50,
  },
  time: {
    alignSelf: "flex-end",
    color: "grey",
  },
  message: {},
});
