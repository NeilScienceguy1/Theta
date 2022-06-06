import { IFooterProps } from "../../types/interfaces/FooterProps";

export const FooterData: IFooterProps = {
	brand: "ChesSBS",
	tagline: "Chess-based Social Business System",
	contentLinks: [
		{
			text: "Home",
			href: "/",
		},
		{
			text: "About",
			href: "/about",
		},
		{
			text: "Resources",
			href: "/resources",
		},
	],
	dashboardLinks: [
		{
			text: "App",
			href: "/dashboard/app",
		},
		{
			text: "Leaderboard",
			href: "/dashboard/leaderboard",
		},
	],
	chessLinks: [
		{
			text: "Lichess",
			href: "https://lichess.org/",
		},
		{
			text: "Chess.com",
			href: "https://chess.com/",
		},
		{
			text: "Chessle",
			href: "https://jackli.gg/chessle/",
		},
	],
    contact: {
        phone: "+1 (917) 544-8984",
        email: "example@example.com",
    }
};