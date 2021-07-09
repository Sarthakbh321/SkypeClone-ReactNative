import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { generateToken } from "../../utils/token";
import RtcEngine, {
	RtcLocalView,
	RtcRemoteView,
	VideoRenderMode,
} from "react-native-agora";
import { ActivityIndicator, FAB } from "react-native-paper";
import { BACKEND_URL } from "@env";
import axios from "axios";

const VideoCall = ({ navigation }) => {
	/**
	 * TODO: PUT KEYS INTO ENV
	 */
	const [appId, setAppId] = useState("bc353855fafe40108ad901b667e95d12");
	const [appCertificate, setCertificate] = useState(
		"9d33f38e53854576820ce55fa91c7cf8",
	);
	const [channelName, setChannelName] = useState("SkypeClone Sarthak");
	const [token, setToken] = useState("");
	const [joinSucceeded, setJoinSuccess] = useState(false);
	const [peerIds, setPeerIds] = useState([]);
	const [engineObj, setEngineObj] = useState();

	const [muted, setMuted] = useState(false);
	const [cameraOn, setCameraOn] = useState(true);

	let engine;

	const getToken = async () => {
		const url = `${BACKEND_URL}/generateToken`;
		const data = {
			appId,
			appCertificate,
			channelName,
		};

		try {
			const res = await axios.post(url, data);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	};

	const setup = async () => {
		// const token = generateToken(appId, appCertificate, channelName);
		// setToken(token);

		engine = await RtcEngine.create(appId);
		setEngineObj(engine);
		await engine.enableVideo();
		await engine.enableLocalVideo(true);

		console.log("Sds");

		engine.addListener("UserJoined", (uid, elapsed) => {
			console.log("UserJoined", uid, elapsed);

			if (peerIds.indexOf(uid) === -1) {
				setPeerIds(prev => [...prev, uid]);
			}
		});

		engine.addListener("UserOffline", (uid, elapsed) => {
			console.log("UserOffline", uid, elapsed);

			setPeerIds(prev => prev.filter(id => id !== uid));
		});

		engine.addListener("JoinChannelSuccess", (channel, uid, elapsed) => {
			console.log("Joined");
			setJoinSuccess(true);
		});

		engine.addListener("Error", err => console.log(err));

		const { token, uid } = await getToken();
		console.log(token, uid);
		await engine.joinChannel(token, channelName, null, uid);
	};

	const leaveChannel = async () => {
		if (engine) await engine.leaveChannel();
		console.log("Left");
	};

	const handleEndClick = async () => {
		navigation.goBack();
	};

	const handleMuteBtn = async () => {
		await engineObj.muteLocalAudioStream(!muted);
		setMuted(!muted);
	};

	const handleCameraBtn = async () => {
		await engineObj.enableLocalVideo(!cameraOn);
		setCameraOn(!cameraOn);
	};

	useEffect(() => {
		setup();

		return () => leaveChannel();
	}, []);

	if (!joinSucceeded) {
		return (
			<View style={[styles.videoCallContainer, styles.center]}>
				<ActivityIndicator
					animating={true}
					color="#0070db"
					size="large"
				/>
			</View>
		);
	}

	return (
		<View style={styles.videoCallContainer}>
			<View style={styles.remoteContainer}>
				{peerIds.map((value, index) => (
					<RtcRemoteView.SurfaceView
						key={index}
						style={styles.remoteView}
						uid={value}
						channelId={channelName}
						renderMode={VideoRenderMode.Fit}
					/>
				))}
			</View>
			<View style={styles.absolute}>
				{cameraOn ? (
					<RtcLocalView.SurfaceView
						style={{ flex: 1, zIndex: 100 }}
						channelId={channelName}
						renderMode={VideoRenderMode.Fit}
					/>
				) : null}
			</View>
			<View style={styles.actionBar}>
				<FAB
					icon="microphone"
					style={muted ? styles.audioBtnMuted : styles.audioBtn}
					onPress={() => handleMuteBtn()}
				/>
				<FAB
					icon="camera"
					style={cameraOn ? styles.cameraBtn : styles.cameraBtnOff}
					onPress={() => handleCameraBtn()}
				/>
				<FAB
					icon="phone"
					style={styles.endBtn}
					onPress={() => handleEndClick()}
				/>
			</View>
		</View>
	);
};

export default VideoCall;

const styles = StyleSheet.create({
	center: {
		justifyContent: "center",
		alignItems: "center",
	},
	localView: {
		flex: 1,
		// zIndex: 100,
		// color: "#000",
	},
	absolute: {
		position: "absolute",
		width: 120,
		height: 170,
		borderWidth: 2,
		borderColor: "#777",
		borderRadius: 10,
		overflow: "hidden",
		top: 10,
		right: 10,
		zIndex: 100,
		backgroundColor: "#000",
	},
	remoteContainer: {
		flex: 1,
		zIndex: -1,
		position: "absolute",
		top: 0,
		right: 0,
		width: "100%",
		height: "100%",
	},
	remoteView: {
		// backgroundColor: "#000",
		zIndex: -1,
		position: "absolute",
		top: 0,
		right: 0,
		width: "100%",
		height: "100%",
	},
	videoCallContainer: {
		flex: 1,
		backgroundColor: "#19191b",
		// justifyContent: "center",
	},
	actionBar: {
		position: "absolute",
		width: "100%",
		height: 80,
		bottom: 40,

		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		paddingHorizontal: 50,
	},

	audioBtn: {
		backgroundColor: "#0070db",
	},

	audioBtnMuted: {
		backgroundColor: "#ccc",
	},

	cameraBtn: {
		backgroundColor: "#0070db",
	},
	cameraBtnOff: {
		backgroundColor: "#ccc",
	},

	endBtn: {
		backgroundColor: "red",
	},
});
