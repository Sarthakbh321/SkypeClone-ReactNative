import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../App";
import CallList from "../../components/CallList/CallList";

const CallScreen = ({ navigation }) => {
	return (
		<View style={globalStyles.container}>
			<CallList navigation={navigation} />
			{/* <Text style={globalStyles.text}>Call Screen</Text> */}
		</View>
	);
};

export default CallScreen;

const styles = StyleSheet.create({});
