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
import { IconButton } from "react-native-paper";
import moment from "moment";

const CallListItem = ({ navigation }) => {
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
				</View>
				<View style={styles.bottomRow}>
					<Text style={styles.lastMsg}>
						{moment().format("MM/DD/YYYY")}
					</Text>
				</View>
			</View>
			<View style={styles.btnContainer}>
				<IconButton
					icon="video-wireless-outline"
					size={28}
					color="white"
					onPress={() =>
						navigation.navigate("Video Call", { isVoice: false })
					}
					style={styles.actionIcon}
				/>
				<IconButton
					icon="phone"
					size={28}
					color="white"
					onPress={() =>
						navigation.navigate("Video Call", { isVoice: true })
					}
					style={styles.actionIcon}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default CallListItem;

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: "row",
		paddingHorizontal: 10,
		// paddingVertical: 5,
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
		paddingTop: 5,
	},
	bottomRow: {
		marginBottom: 5,
		paddingBottom: 5,
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
	btnContainer: {
		flexDirection: "row",
	},
	actionIcon: {
		marginHorizontal: 0,
	},
});
