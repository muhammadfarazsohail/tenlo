import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import firebase from "firebase";

export default function Chat({ props }) {
  const [messages, setMessages] = useState([]);

  // These receiver and sender IDs should eventually passed and retrieved with props
  let receiverid = 1;
  let senderid = 2;
  let idname;
  if (receiverid < senderid) {
    idname = receiverid + "_" + senderid;
  } else {
    idname = senderid + "_" + receiverid;
  }

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(message) => {
        onSend(message);
        sendMessage(message, idname);
      }}
      user={{
        _id: receiverid,
      }}
    />
  );
}

function sendMessage(message, cid) {
  let messagesRef = firebase.database().ref("Messages/" + cid);
  let today = new Date();
  let timestamp = today.toISOString();
  for (let i = 0; i < message.length; i++) {
    messagesRef.push({
      text: message[i].text,
      user: message[i].user,
      createdAt: timestamp,
    });
  }
}
