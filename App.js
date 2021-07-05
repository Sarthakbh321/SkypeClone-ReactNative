import "react-native-gesture-handler";
import React from "react";
import { PermissionsAndroid, Platform, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { MenuProvider } from "react-native-popup-menu";
import MainRoutes from "./routes/MainRoutes";
import { useEffect } from "react";

const App = () => {
	const requestPermissionsAndroid = async () => {
		try {
			const granted = await PermissionsAndroid.requestMultiple([
				PermissionsAndroid.PERMISSIONS.CAMERA,
				PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
			]);

			console.log(granted);

			if (
				granted["android.permission.RECORD_AUDIO"] ===
					PermissionsAndroid.RESULTS.GRANTED &&
				granted["android.permission.CAMERA"] ===
					PermissionsAndroid.RESULTS.GRANTED
			) {
				console.log("You have permissions!");
			} else {
				console.log("Permissions Denied");
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (Platform.OS === "android") requestPermissionsAndroid();
	}, []);

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
