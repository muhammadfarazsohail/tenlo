import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import firebase from "firebase";

export default function Chat({ props }) {
  const [messages, setMessages] = useState([] as any);

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
    let messageRef = firebase.database().ref("Messages/" + idname);
    messageRef.orderByChild("createdAt").on("value", function (snapshot) {
      fetchMsg(snapshot);
    });

    // setMessages([
    //   {
    //     _id: 1,
    //     text: "Hello developer",
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: "React Native",
    //     },
    //   },
    // ]);
  }, []);

  function fetchMsg(snapshot) {
    let messageList = [];
    snapshot.forEach((data) => {
      const message = data.val();
      let loadMessage = {
        _id: data.key,
        text: message.text,
        createdAt: message.createdAt,
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      };
      messageList.unshift(loadMessage);
    });
    setMessages(messageList);
  }

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(message) => {
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
