export const useLocalStorage = (
	key: string,
	args: { data: any; type: "get" | "set" }
) => {
	if (args.data && args.type === "set") {
		localStorage.setItem(key, args.data);
		return "KEY SET";
	} else if (args.type === "get") {
		if (!localStorage.getItem(key)) return "KEY NOT FOUND";
		else {
			if (
				typeof localStorage.getItem(key) === "string" &&
				localStorage.getItem(key) != null
			) {
				return localStorage.getItem(key);
			}
			return "KEY TYPE INCORRECT";
		}
	} else {
		localStorage.removeItem(key);
		return "KEY REMOVED";
	}
};
