import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CallScreen from "../screens/CallScreen/CallScreen";
import ContactScreen from "../screens/ContactScreen/ContactScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ChatScreen from "../screens/ChatScreen/ChatScreen";
import AppBar from "../components/AppBar/AppBar";

const Tab = createBottomTabNavigator();

export default function TabRoutes({ navigation }) {
	return (
		<>
			<AppBar navigation={navigation} />
			<Tab.Navigator
				tabBarOptions={{
					activeTintColor: "#0070db",
					style: tabStyles,
				}}
				initialRouteName="Chat">
				<Tab.Screen
					name="Chat"
					component={ChatScreen}
					options={{
						tabBarIcon: ({ focused, color }) => (
							<MaterialIcons
								name="chat"
								size={28}
								color={color}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Calls"
					component={CallScreen}
					options={{
						tabBarIcon: ({ focused, color }) => (
							<MaterialIcons
								name="call"
								size={28}
								color={color}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Contacts"
					component={ContactScreen}
					options={{
						tabBarIcon: ({ focused, color }) => (
							<MaterialIcons
								name="contacts"
								size={28}
								color={color}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		</>
	);
}

const tabStyles = {
	backgroundColor: "#1f1f1f",
};
