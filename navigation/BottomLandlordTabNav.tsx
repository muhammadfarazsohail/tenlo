import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Landlord from '../screens/Landlord';
import Postings from '../screens/Postings';
import ChatRoom from '../screens/ChatRoom';
import { BottomLandlordTabParamList, TabOneLandlordParamList, TabTwoPostingParamList } from '../types';

const BottomTab = createBottomTabNavigator(); //<BottomLandlordTabParamList>

export default function BottomLandlordTabNav() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Landlord"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
        {/*screens for navigation */}
      <BottomTab.Screen
        name="Landlord"
        component={LandlordNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-circle-outline" color={color} />,
        }}
      />
      {/* <BottomTab.Screen
        name="Postings"
        component={PostingNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      /> */}
      <BottomTab.Screen
        name="Chats"
        component={ChatRoomNav}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="chatbox-ellipses-outline" color={color} />,
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
const TabOneStack = createStackNavigator<TabOneLandlordParamList>();

function LandlordNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="LandlordScreen"
        component={Landlord}
        options={{ headerTitle: 'Landlord' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoPostingParamList>();

function PostingNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="PostingScreen"
        component={Postings}
        options={{ headerTitle: 'Postings' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator();

function ChatRoomNav() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="ChatRoomScreen"
        component={ChatRoom}
        options={{ headerTitle: 'ChatRoom' }}
      />
    </TabThreeStack.Navigator>
  );
}
