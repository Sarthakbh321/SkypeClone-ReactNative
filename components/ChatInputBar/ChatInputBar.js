import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { IconButton } from "react-native-paper";

const ChatInputBar = ({ setMessages }) => {
	const [inputText, setInputText] = useState("");

	const handleMsgSubmit = () => {
		setMessages(prev => [
			...prev,
			{
				by: 1,
				text: inputText,
			},
		]);

		setInputText("");
	};

	return (
		<View style={styles.inputBarContainer}>
			<IconButton
				icon="plus"
				size={24}
				color="white"
				style={styles.addButton}
			/>

			<TextInput
				style={styles.input}
				placeholder="Type a message"
				placeholderTextColor="#777"
				onChangeText={text => setInputText(text)}
				value={inputText}
			/>
			{inputText.length === 0 ? (
				<View style={{ flexDirection: "row" }}>
					<IconButton
						icon="microphone-outline"
						size={32}
						color="white"
						style={styles.actionBtn}
					/>
					<IconButton
						icon="camera-outline"
						size={32}
						color="white"
						style={styles.actionBtn}
					/>
				</View>
			) : (
				<View style={styles.submitView}>
					<IconButton
						icon="send"
						size={24}
						color="white"
						style={styles.submitBtn}
						onPress={handleMsgSubmit}
					/>
				</View>
			)}
		</View>
	);
};

export default ChatInputBar;

const styles = StyleSheet.create({
	inputBarContainer: {
		backgroundColor: "#1f1f1f",
		height: 50,
		padding: 5,
		flexDirection: "row",
		alignItems: "center",
	},
	addButton: {
		backgroundColor: "#0070db",
		borderRadius: 50,
		marginRight: 10,
	},
	input: {
		flex: 1,
		borderRadius: 10,
		backgroundColor: "#2b2c34",
		paddingHorizontal: 20,
		fontSize: 18,
		color: "#fff",
	},
	submitBtn: {
		borderRadius: 50,
		backgroundColor: "#0070db",
	},

	actionBtn: {
		marginHorizontal: -5,
	},
});
