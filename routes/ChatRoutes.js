import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "../screens/ChatScreen/ChatScreen";
import Chat from "../screens/ChatScreen/Chat/Chat";

const Stack = createStackNavigator();

const ChatRoutes = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Chat List"
				component={ChatScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Personal Chat"
				component={Chat}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default ChatRoutes;

const styles = StyleSheet.create({});
