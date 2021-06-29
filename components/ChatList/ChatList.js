import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import ChatListItem from "../ChatListItem/ChatListItem";

const ChatList = ({ navigation }) => {
	return (
		<ScrollView>
			{Array(10)
				.fill()
				.map((item, index) => (
					<ChatListItem navigation={navigation} key={index} />
				))}
		</ScrollView>
	);
};

export default ChatList;

const styles = StyleSheet.create({});
