import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import OctIcon from "react-native-vector-icons/Octicons";

const ChatHeader = ({ navigation }) => {
	return (
		<View style={styles.appBar}>
			<View style={styles.left}>
				<IconButton
					icon="keyboard-backspace"
					size={28}
					color="white"
					onPress={() => navigation.navigate("Menus")}
				/>
				<View>
					<Text style={styles.headerPrimaryText}>Hello World</Text>
					<View style={styles.activityStatusView}>
						<OctIcon
							name="primitive-dot"
							color="lime"
							size={18}
							style={{ marginRight: 5 }}
						/>
						<Text style={styles.headerSecondaryText}>
							Active Now
						</Text>
					</View>
				</View>
			</View>
			<View style={styles.right}>
				<IconButton
					icon="video-wireless-outline"
					size={28}
					color="white"
					onPress={() => navigation.navigate("Video Call")}
					style={styles.actionIcon}
				/>
				<IconButton
					icon="phone"
					size={28}
					color="white"
					onPress={() => console.log("Pressed")}
					style={styles.actionIcon}
				/>
			</View>
		</View>
	);
};

export default ChatHeader;

const styles = StyleSheet.create({
	appBar: {
		backgroundColor: "#1f1f1f",
		height: 60,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 5,
		justifyContent: "space-between",
		borderBottomColor: "#777",
		borderBottomWidth: 0.15,
	},
	left: {
		flexDirection: "row",
		alignItems: "center",
	},
	headerPrimaryText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 20,
	},
	headerSecondaryText: {
		color: "#ccc",
	},
	activityStatusView: {
		flexDirection: "row",
		alignItems: "center",
	},
	right: {
		flexDirection: "row",
		alignItems: "center",
	},
});
