import axios from "axios";

export const useLichessQuery = (
	url: string,
	args: { type: "POST" | "GET"; data?: Object }
) => {
	switch (args.type) {
		case "POST":
			axios
				.post(
					`https://sbsproxy.herokuapp.com/${url}`,
					args.data ?? args.data
				)
				.then((res) => {
					if (res.data) {
						return res.data;
					}
				})
				.catch((err) => {
					console.log(err)
				});
			break;
		case "GET":
			axios
				.get(
					`https://sbsproxy.herokuapp.com/${url}`,
					args.data ?? args.data
				)
				.then((res) => {
					return res;
				})
				.catch((err) => {
					return err;
				});
			break;
		default:
			return "INVALID REQUEST TYPE";
	}
};
