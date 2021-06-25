import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CallScreen from "./screens/CallScreen/CallScreen";
import ContactScreen from "./screens/ContactScreen/ContactScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AppBar from "./components/AppBar/AppBar";
import { Provider as PaperProvider } from "react-native-paper";
import { MenuProvider } from "react-native-popup-menu";
import ChatRoutes from "./routes/ChatRoutes";

const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<PaperProvider>
			<MenuProvider>
				<AppBar />

				<NavigationContainer>
					<Tab.Navigator
						tabBarOptions={{
							activeTintColor: "#0070db",
							style: tabStyles,
						}}>
						<Tab.Screen
							name="Chat"
							component={ChatRoutes}
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
				</NavigationContainer>
			</MenuProvider>
		</PaperProvider>
	);
};

const tabStyles = {
	backgroundColor: "#1f1f1f",
};

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#19191b",
	},
	text: {
		color: "#fff",
	},
});

export default App;
