import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SIgnUp';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="LogIn"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
        {/*screens for navigation */}
      <BottomTab.Screen
        name="LogIn"
        component={LogInNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="enter" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="SignUp"
        component={SignUpNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="create" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function LogInNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="LogInScreen"
        component={LogIn}
        options={{ headerTitle: 'Log In' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function SignUpNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="SignUpScreen"
        component={SignUp}
        options={{ headerTitle: 'Sign Up' }}
      />
    </TabTwoStack.Navigator>
  );
}
