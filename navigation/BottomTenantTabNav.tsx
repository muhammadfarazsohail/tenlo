import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Tenants from '../screens/Tenants';
import Postings from '../screens/Postings';
import ChatRoom from '../screens/ChatRoom';
import Preference from '../screens/Preferences';
import { BottomTenantTabParamList, TabOneParamList, TabTwoParamList, TabOneTenantParamList,TabTwoPostingParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';

const TenBottomTab = createBottomTabNavigator(); //<BottomTenantTabParamList>

export default function BottomTenantTabNav({route,props}){
  const colorScheme = useColorScheme();
const data=route.params;
    return(
        <TenBottomTab.Navigator
        initialRouteName="Tenants"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
{/*Nav Screens */}
<TenBottomTab.Screen
        name="Tenants"
        // component={TenantsNavigator}
        children={()=><TenantsNavigator data={data}/>}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-circle-sharp" color={color} />,
        }}
      />
      {/* <TenBottomTab.Screen
        name="Postings"
        component={PostingNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      /> */}
       <TenBottomTab.Screen
        name="Chats"
        // component={ChatRoomNav}
        children={()=><ChatRoomNav data={data} />}
        
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="chatbox-ellipses-outline" color={color} />,
        }}
      />

<TenBottomTab.Screen
        name="Preferences"
        // component={ChatRoomNav}
        children={()=><PreferencesNav data={data} />}
        
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="settings" color={color} />,
        }}
      />
        </TenBottomTab.Navigator>
        
        

    );
}


// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
  }
  
  // Each tab has its own navigation stack, you can read more about this pattern here:
  // https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
  const TabOneStack = createStackNavigator<TabOneTenantParamList>();
  
  function TenantsNavigator({data}) {
    return (
      <TabOneStack.Navigator>
        <TabOneStack.Screen
          name="TenantScreen"
          // component={Tenants}
          children={()=><Tenants data={data}/>}
          options={{ headerTitle: 'Tenants' }}
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

function ChatRoomNav({data}) {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="ChatRoomScreen"
        // component={ChatRoom}
        children={()=><ChatRoom data={data} />}
        options={{ headerTitle: 'ChatRoom' }}
      />
    </TabThreeStack.Navigator>
  );
}

const Tab4Stack = createStackNavigator();

function PreferencesNav({data}) {
  return (
    <Tab4Stack.Navigator>
      <Tab4Stack.Screen
        name="PreferencesScreen"
        // component={ChatRoom}
        children={()=><Preference data={data} />}
        options={{ headerTitle: 'Preferences' }}
      />
    </Tab4Stack.Navigator>
  );
}