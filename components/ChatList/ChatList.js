import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import ChatListItem from "../ChatListItem/ChatListItem";

const ChatList = () => {
	return (
		<ScrollView>
			{Array(10)
				.fill()
				.map(() => (
					<ChatListItem />
				))}
		</ScrollView>
	);
};

export default ChatList;

const styles = StyleSheet.create({});
