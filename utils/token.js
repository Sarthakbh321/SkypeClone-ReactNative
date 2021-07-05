import AgoraToken from "agora-access-token";

export const generateToken = (appId, appCert, channel) => {
	const uid = Math.floor(Math.random() * 100000);

	const expirationTimeInSeconds = 3600;
	const currentTimestamp = Math.floor(Date.now() / 1000);
	const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
	const role = AgoraToken.RtcRole.PUBLISHER;

	const token = AgoraToken.RtcTokenBuilder.buildTokenWithUid(
		appId,
		appCert,
		channel,
		uid,
		role,
		privilegeExpiredTs,
	);

	console.log(token);
	return token;
};
