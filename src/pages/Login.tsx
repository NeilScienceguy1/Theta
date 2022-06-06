import React, { useEffect } from "react";
import { generateCodeChallenge } from "../functions/CodeChallenge";
import { generateCodeVerifier } from "../functions/CodeVerifier";
import { useLocalStorage } from "../hooks/useLocalStorage";

const code_verifier = generateCodeVerifier();
const code_challenge = generateCodeChallenge(code_verifier);

const Login = () => {
	useLocalStorage("code_verifier", {
		data: code_verifier,
		type: "set",
	});
	useEffect(() => {
		var url = new URL("https://lichess.org/oauth");
		url.searchParams.append("response_type", "code");
		url.searchParams.append("client_id", "ChesSBS123");
		url.searchParams.append(
			"redirect_uri",
			"http://localhost:3000/login/callback"
		);
		url.searchParams.append("code_challenge_method", "S256");
		url.searchParams.append("code_challenge", code_challenge);
		url.searchParams.append(
			"scope",
			"preference:read preference:write email:read tournament:write puzzle:read team:read team:write follow:write msg:write study:read study:write"
		);
		url.searchParams.append("state", "magnesium");
		window.location.href = url.href;
	}, []);
	return <div>Login</div>;
};

export default Login;
