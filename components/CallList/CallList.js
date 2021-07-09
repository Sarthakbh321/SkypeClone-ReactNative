import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import CallListItem from "../CallListItem/CallListItem";

const CallList = ({ navigation }) => {
	return (
		<ScrollView>
			{Array(10)
				.fill()
				.map((item, index) => (
					<CallListItem navigation={navigation} key={index} />
				))}
		</ScrollView>
	);
};

export default CallList;

const styles = StyleSheet.create({});
