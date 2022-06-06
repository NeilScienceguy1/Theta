import React from "react";
import { useSearchParams } from "react-router-dom";
import { useLichessQuery } from "../hooks/useLichessQuery";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LoginCallback = () => {
	const [searchParams] = useSearchParams();
    const code = searchParams.get("code");
    let code_verifier = useLocalStorage("code_verifier", {
		data: null,
		type: "get",
	});
    if (!code_verifier) code_verifier = ""
    const result = useLichessQuery("https://lichess.org/api/token", {
		type: "POST",
		data: {
			grant_type: "authorization_code",
			code: code ? code : "",
			code_verifier: code_verifier,
			client_id: "ChesSBS123",
			redirect_uri: "http://localhost:3000/login/callback",
		},
	})
    console.log(result)
	return <div>LoginCallback</div>;
};

export default LoginCallback;
