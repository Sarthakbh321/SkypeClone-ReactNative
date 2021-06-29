import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "../screens/ChatScreen/Chat/Chat";
import TabRoutes from "./TabRoutes";

const Stack = createStackNavigator();

const MainRoutes = () => {
	return (
		<Stack.Navigator initialRouteName="Menus">
			<Stack.Screen
				name="Menus"
				component={TabRoutes}
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

export default MainRoutes;
