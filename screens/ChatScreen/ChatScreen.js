import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../../App";

const ChatScreen = ({ navigation }) => {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.text}>Chat Screen</Text>
			<Button
				title="Go to chat"
				onPress={() => navigation.navigate("Personal Chat")}
			/>
		</View>
	);
};

export default ChatScreen;

const styles = StyleSheet.create({});
