import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../App";
import ChatHeader from "../../../components/ChatHeader/ChatHeader";
import messages from "../../../utils/messages";
import ChatMessage from "../../../components/ChatMessage/ChatMessage";

const Chat = ({ navigation }) => {
	return (
		<View style={globalStyles.container}>
			<ChatHeader navigation={navigation} />
			<ScrollView style={styles.chatContainer}>
				{messages.map((msg, i) => (
					<ChatMessage key={i} message={msg} />
				))}
			</ScrollView>
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
