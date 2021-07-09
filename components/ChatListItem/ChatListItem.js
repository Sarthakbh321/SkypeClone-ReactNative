import moment from "moment";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import OctIcon from "react-native-vector-icons/Octicons";
import messages from "../../utils/messages";

const ChatListItem = ({ navigation }) => {
	return (
		<TouchableOpacity
			style={styles.itemContainer}
			onPress={() => navigation.navigate("Personal Chat")}>
			<View style={styles.left}>
				<ImageBackground
					source={require("./img/profile.png")}
					style={styles.navImgContainer}
					imageStyle={styles.navImg}>
					<OctIcon
						name="primitive-dot"
						color="lime"
						size={28}
						style={styles.activityStatus}
					/>
				</ImageBackground>
			</View>
			<View style={styles.right}>
				<View style={styles.topRow}>
					<Text style={styles.username}>Sarthak Bharadwaj</Text>
					<Text style={styles.msgDate}>
						{moment().format("MM/DD/YYYY")}
					</Text>
				</View>
				<View style={styles.bottomRow}>
					<Text style={styles.lastMsg}>
						{messages[messages.length - 1].text}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default ChatListItem;

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: "row",
		paddingHorizontal: 10,
		// paddingVertical: 10,
	},
	left: {
		marginRight: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	right: {
		borderBottomColor: "#333",
		borderBottomWidth: 0.5,
		flex: 1,
	},
	topRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 3,
		paddingTop: 10,
	},
	bottomRow: {
		paddingBottom: 10,
	},
	lastMsg: {
		color: "#ccc",
	},
	username: {
		color: "#fff",
		fontSize: 18,
	},
	msgDate: {
		color: "#ccc",
	},
	navImg: {
		borderRadius: 50,
	},

	activityStatus: {
		position: "absolute",
		right: -3,
		bottom: -8,
	},
	navImgContainer: {
		width: 45,
		height: 45,
	},
});
