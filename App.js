import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { MenuProvider } from "react-native-popup-menu";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
	return (
		<PaperProvider>
			<MenuProvider>
				<NavigationContainer>
					<MainRoutes />
				</NavigationContainer>
			</MenuProvider>
		</PaperProvider>
	);
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
