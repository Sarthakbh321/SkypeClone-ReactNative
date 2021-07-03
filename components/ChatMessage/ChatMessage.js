import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChatMessage = ({ message }) => {
	return (
		<View
			style={[
				styles.messageRow,
				message.by === -1 ? styles.other : styles.user,
			]}>
			<View
				style={[
					styles.messageContainer,
					message.by === -1 ? styles.msgOther : styles.msgUser,
				]}>
				<Text style={styles.messageText}>{message.text}</Text>
			</View>
		</View>
	);
};

export default ChatMessage;

const styles = StyleSheet.create({
	messageRow: {
		marginVertical: 5,
		// paddingHorizontal: 5,
		flexDirection: "row",
	},
	user: {
		justifyContent: "flex-end",
	},
	other: {
		justifyContent: "flex-start",
	},
	messageText: {
		color: "#fff",
		fontSize: 18,
	},
	messageContainer: {
		padding: 10,
		paddingHorizontal: 15,
	},
	msgOther: {
		backgroundColor: "#1d2224",
		borderRadius: 8,
		borderTopLeftRadius: 0,
	},
	msgUser: {
		backgroundColor: "#2a333c",
		borderRadius: 8,
		borderBottomRightRadius: 0,
	},
});
