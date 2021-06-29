import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../../App";
import ChatList from "../../components/ChatList/ChatList";

const ChatScreen = ({ navigation }) => {
	return (
		<View style={globalStyles.container}>
			<ChatList navigation={navigation} />
			{/* <Text style={globalStyles.text}>Chat Screen</Text>
			<Button
				title="Go to chat"
				onPress={() => navigation.navigate("Personal Chat")}
			/> */}
		</View>
	);
};

export default ChatScreen;

const styles = StyleSheet.create({});
