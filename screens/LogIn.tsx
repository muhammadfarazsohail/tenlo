import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function LogIn() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/LogIn.tsx" /> */}
      <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Email"/>
     <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Password"/>
    </View>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
