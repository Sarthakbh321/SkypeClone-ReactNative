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
import { FAB } from "react-native-paper";

const VideoCall = ({ navigation }) => {
	/**
	 * TODO: PUT KEYS INTO ENV
	 */
	const [appId, setAppId] = useState("bc353855fafe40108ad901b667e95d12");
	const [appCertificate, setCertificate] = useState(
		"9d33f38e53854576820ce55fa91c7cf8",
	);
	const [channelName, setChannelName] = useState("SkypeClone Sarthak");
	const [token, setToken] = useState(
		"006bc353855fafe40108ad901b667e95d12IAB0RPnJILWcFnOPbBs+OUfOecWL4ip0mRSwK4+euhh/7R8E5EsAAAAAEABsKo0tBZroYAEAAQAFmuhg",
	);
	const [joinSucceeded, setJoinSuccess] = useState(false);
	const [peerIds, setPeerIds] = useState([]);
	const [engineObj, setEngineObj] = useState();

	const [muted, setMuted] = useState(false);
	const [cameraOff, setCameraOff] = useState(false);

	let engine;

	const setup = async () => {
		// const token = generateToken(appId, appCertificate, channelName);
		// setToken(token);

		engine = await RtcEngine.create(appId);
		setEngineObj(engine);
		await engine.enableVideo();

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
			setJoinSuccess(true);
		});

		engine.addListener("Error", err => console.log(err));

		await engine.joinChannel(token, channelName, null, 0);
	};

	const leaveChannel = async () => {
		await engine.leaveChannel();
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
		await engineObj.muteLocalVideoStream(!cameraOff);
		setCameraOff(!cameraOff);
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
				<RtcLocalView.SurfaceView
					style={{ flex: 1, zIndex: 100 }}
					channelId={channelName}
					renderMode={VideoRenderMode.Fit}
				/>
			</View>
			<View style={styles.actionBar}>
				<FAB
					icon="microphone"
					style={muted ? styles.audioBtnMuted : styles.audioBtn}
					onPress={() => handleMuteBtn()}
				/>
				<FAB
					icon="camera"
					style={cameraOff ? styles.cameraBtnOff : styles.cameraBtn}
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
