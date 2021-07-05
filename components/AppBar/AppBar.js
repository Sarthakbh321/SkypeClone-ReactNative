import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { IconButton } from "react-native-paper";
import OctIcon from "react-native-vector-icons/Octicons";
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
} from "react-native-popup-menu";

const AppBar = ({ navigation }) => {
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
					size={28}
					style={styles.activityStatus}
				/>
			</ImageBackground>
			<View style={styles.actionBar}>
				<IconButton
					icon="video-wireless-outline"
					size={28}
					color="white"
					onPress={() => navigation.navigate("Video Call")}
					style={styles.actionIcon}
				/>
				<IconButton
					icon="magnify"
					size={28}
					color="white"
					onPress={() => console.log("Pressed")}
					style={styles.actionIcon}
				/>
				<Menu>
					<MenuTrigger>
						<IconButton
							icon="dots-vertical"
							size={28}
							color="white"
							// onPress={() => console.log("Pressed")}
							style={styles.actionIcon}
						/>
					</MenuTrigger>
					<MenuOptions>
						<MenuOption
							onSelect={() => console.log("Menu")}
							text="Sort by Recent"
						/>
						<MenuOption
							onSelect={() => console.log("Menu")}
							text="Sort by Unread"
						/>
						<MenuOption
							onSelect={() => console.log("Menu")}
							text="Sort by Active"
						/>
						<MenuOption
							onSelect={() => console.log("Menu")}
							text="Hide favourites"
						/>
						<MenuOption
							onSelect={() => console.log("Menu")}
							text="Enable compact layout"
						/>
					</MenuOptions>
				</Menu>
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
		borderBottomColor: "#777",
		borderBottomWidth: 0.15,
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
	menuOptions: {
		backgroundColor: "#1f1f1f",
	},
});
