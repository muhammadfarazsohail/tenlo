import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import firebase from "firebase";
import Chat from "./screens/Chat";

var firebaseConfig = {
  apiKey: "AIzaSyCRFEKyWJ3ajV-TiXCaXtD0DdqO3g75CyA",
  authDomain: "tenlo-project.firebaseapp.com",
  databaseURL: "https://tenlo-project-default-rtdb.firebaseio.com",
  projectId: "tenlo-project",
  storageBucket: "tenlo-project.appspot.com",
  messagingSenderId: "826972459172",
  appId: "1:826972459172:web:9e56eaa69a32eeccf8d631",
  measurementId: "G-DLXVLF3G3F",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <Chat data /> */}
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
