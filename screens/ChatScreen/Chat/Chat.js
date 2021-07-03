import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../App";
import ChatHeader from "../../../components/ChatHeader/ChatHeader";

const Chat = ({ navigation }) => {
	return (
		<View style={globalStyles.container}>
			<ChatHeader navigation={navigation} />
			<Text>Chats will be displayed here</Text>
		</View>
	);
};

export default Chat;

const styles = StyleSheet.create({});
