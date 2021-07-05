import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { generateToken } from "../../utils/token";
import RtcEngine, { RtcLocalView, VideoRenderMode } from "react-native-agora";

const VideoCall = () => {
	const [appId, setAppId] = useState("bc353855fafe40108ad901b667e95d12");
	const [appCertificate, setCertificate] = useState(
		"9d33f38e53854576820ce55fa91c7cf8",
	);
	const [channelName, setChannelName] = useState("SkypeClone Sarthak");
	const [token, setToken] = useState(
		"006bc353855fafe40108ad901b667e95d12IABhkxRdSS7ql6AS2P3zXgLsFVGpw/xnODcQkSjy8mJ1dR8E5EsAAAAAEAAY899JjK/kYAEAAQCMr+Rg",
	);
	const [joinSucceeded, setJoinSuccess] = useState(false);
	const [peerIds, setPeerIds] = useState([]);

	let engine = null;

	const setup = async () => {
		// const token = generateToken(appId, appCertificate, channelName);
		// setToken(token);

		engine = await RtcEngine.create(appId);
		await engine.enableVideo();

		console.log("Sds");

		engine.addListener("UserJoined", (uid, elapsed) => {
			console.log("UserJoined", uid, elapsed);

			if (peerIds.indexOf(uid) === -1) {
				setPeerIds(prev => [...prev, uid]);
			}
		});

		engine.addListener("UserOffline", (uid, elapsed) => {
			console.log("UserOffline", uid, reason);

			setPeerIds(prev => prev.filter(id => id !== uid));
		});

		engine.addListener("JoinChannelSuccess", (channel, uid, elapsed) => {
			setJoinSuccess(true);
		});

		engine.addListener("Error", err => console.log(err));

		await engine.joinChannel(token, channelName, null, 0);
	};

	const leaveChannel = async () => {
		await engine.leaveChannel();
		console.log("Left");
	};

	useEffect(() => {
		setup();

		return () => leaveChannel();
	}, []);

	if (!joinSucceeded) {
		return (
			<View>
				<Text>Joining...</Text>
			</View>
		);
	}

	return (
		<View>
			<RtcLocalView.SurfaceView
				style={styles.localView}
				channelId={channelName}
				renderMode={VideoRenderMode.Hidden}
			/>
		</View>
	);
};

export default VideoCall;

const styles = StyleSheet.create({
	localView: {
		flex: 1,
	},
});
