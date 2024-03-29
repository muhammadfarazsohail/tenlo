import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import BottomTenantTabNav from "./BottomTenantTabNav";
import BottomLandlordTabNav from "./BottomLandlordTabNav";
import changePassword from "../screens/changePassword";
import changeAddress from "../screens/changeAddress";
import Personalinfo from "../screens/Personalinfo";
import Preferences from "../screens/Preferences";
import Chat from "../screens/Chat";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Tenants" component={BottomTenantTabNav} />
      <Stack.Screen name="Landlord" component={BottomLandlordTabNav} />
      <Stack.Screen name="changePassword" component={changePassword} />
      <Stack.Screen name="changeAddress" component={changeAddress} />
      <Stack.Screen name="Personalinfo" component={Personalinfo} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
