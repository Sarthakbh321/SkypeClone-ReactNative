import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { IconButton } from "react-native-paper";
import OctIcon from "react-native-vector-icons/Octicons";

const AppBar = () => {
	return (
		<View style={styles.appBar}>
			<IconButton
				icon="bell-outline"
				size={28}
				color="white"
				onPress={() => console.log("Pressed")}
			/>
			{/* <EvilIcon name="bell" size={32} color="white" /> */}
			<ImageBackground
				source={require("./img/profile.png")}
				style={styles.navImgContainer}
				imageStyle={styles.navImg}>
				<OctIcon
					name="primitive-dot"
					color="lime"
					size={30}
					style={styles.activityStatus}
				/>
			</ImageBackground>
			<View style={styles.actionBar}>
				<IconButton
					icon="video-wireless-outline"
					size={28}
					color="white"
					onPress={() => console.log("Pressed")}
					style={styles.actionIcon}
				/>
				<IconButton
					icon="magnify"
					size={28}
					color="white"
					onPress={() => console.log("Pressed")}
					style={styles.actionIcon}
				/>
				<IconButton
					icon="dots-vertical"
					size={28}
					color="white"
					onPress={() => console.log("Pressed")}
					style={styles.actionIcon}
				/>
			</View>
		</View>
	);
};

export default AppBar;

const styles = StyleSheet.create({
	appBar: {
		backgroundColor: "#1f1f1f",
		height: 60,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 5,
		justifyContent: "space-between",
	},

	actionBar: {
		flexDirection: "row",
	},

	actionIcon: {
		marginHorizontal: -2,
	},

	navImgContainer: {
		width: 40,
		height: 40,
		position: "absolute",
		left: "50%",
		marginLeft: -25,
	},

	navImg: {
		borderRadius: 50,
	},

	activityStatus: {
		position: "absolute",
		right: -3,
		bottom: -8,
	},
});
