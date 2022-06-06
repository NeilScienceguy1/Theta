export interface INavbarProps {
	logo: string;
	links: {
		text: string;
		href: string;
		defaultColor: "white" | "indigo";
	}[];
}