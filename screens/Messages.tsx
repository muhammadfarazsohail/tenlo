import * as React from 'react';
import {useState} from 'react';
import * as firebase from 'firebase';
import { Dimensions, StyleSheet,Image, Button,Alert, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const { width, height } = Dimensions.get('window')

export default function Messages({props}){
    const [Msg, setMsg] = useState('');

    return(
        <ScrollView>
            <View style={styles.Spacing}/>
            <View style={styles.inputView}>
              <TextInput style={styles.TextInput}
                value={Msg}
                onChangeText={(Msg) => setMsg(Msg)}
                blurOnSubmit={false}
                onSubmitEditing={() => console.log(Msg)}
                placeholder="Type a message"
                returnKeyType="send"
              />
            </View>
        </ScrollView>
        
    );

}

const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        padding: 10,
        height: 40,
        width: width - 70,
        backgroundColor: '#D0F0C0',
        margin: 10,
        shadowColor: '#3d3d3d',
        shadowRadius: 2,
        shadowOpacity: 0.5,
      },
      TextInput: {
        flex: 1,
      },
      Spacing: {
        height: height - 60,
      },

});