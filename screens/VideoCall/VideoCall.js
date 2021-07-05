import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { generateToken } from "../../utils/token";

const VideoCall = () => {
	const [appId, setAppId] = useState("bc353855fafe40108ad901b667e95d12");
	const [appCertificate, setCertificate] = useState(
		"9d33f38e53854576820ce55fa91c7cf8",
	);
	const [channelName, setChannelName] = useState("SkypeClone Sarthak");
	const [token, setToken] = useState("");
	const [joinSucceeded, setJoinSuccess] = useState(false);
	const [peerIds, setPeerIds] = useState([]);

	const setup = () => {
		// const token = generateToken(appId, appCertificate, channelName);
		// setToken(token);
	};

	useEffect(() => {
		setup();
	}, []);

	return (
		<View>
			<Text>Video Call Screen</Text>
		</View>
	);
};

export default VideoCall;

const styles = StyleSheet.create({});
