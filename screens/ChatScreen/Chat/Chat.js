import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../App";
import ChatHeader from "../../../components/ChatHeader/ChatHeader";
import messageList from "../../../utils/messages";
import ChatMessage from "../../../components/ChatMessage/ChatMessage";
import ChatInputBar from "../../../components/ChatInputBar/ChatInputBar";
import { useState } from "react";

const Chat = ({ navigation }) => {
	const [messages, setMessages] = useState(messageList);

	return (
		<View style={globalStyles.container}>
			<ChatHeader navigation={navigation} />
			<ScrollView style={styles.chatContainer}>
				{messages.map((msg, i) => (
					<ChatMessage key={i} message={msg} />
				))}
			</ScrollView>
			<ChatInputBar setMessages={setMessages} />
		</View>
	);
};

export default Chat;

const styles = StyleSheet.create({
	chatContainer: {
		paddingTop: 20,
		paddingHorizontal: 5,
	},
});
