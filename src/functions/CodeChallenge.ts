import CryptoJS from "crypto-js";

export function generateCodeChallenge(code_verifier: string) {
	return base64URL(CryptoJS.SHA256(code_verifier));
}

function base64URL(string: any) {
	return string
		.toString(CryptoJS.enc.Base64)
		.replace(/=/g, "")
		.replace(/\+/g, "-")
		.replace(/\//g, "_");
}
