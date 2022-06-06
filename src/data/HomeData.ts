import { IHomeData } from "../types/interfaces/HomeData";
import { FooterData } from "./global/FooterData";
import { NavbarData } from "./global/NavbarData";

export const HomeData: IHomeData = {
	nav: NavbarData,
	hero: {
		mainHead: "Welcome to",
		mainSubhead: "ChesSBS",
		description: `
			Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
			qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
			occaecat fugiat aliqua.
		`,
		buttonText: [
			{ text: "Dashboard", href: "/" },
			{ text: "About", href: "/" },
		],
	},
	features: {
		heading: "CHESSBS",
		subheading: "SBS's Chess Club",
		description: `
			Lorem ipsum dolor sit amet consect adipisicing elit.
			Possimus magnam voluptatum cupiditate veritatis in
			accusamus quisquam.
		`,
		content: [
			{
				heading: "Learn Chess With Us!",
				description: `
					Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis
					ratione.
				`,
			},
			{
				heading: "View your Lichess Statistics!",
				description: `
					Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis
					ratione.
				`,
			},
			{
				heading: "Enjoy our collection of resources!",
				description: `
					Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis
					ratione.
				`,
			},
			{
				heading: "Take a look at our activities!",
				description: `
					Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis
					ratione.
				`,
			},
		],
	},
	cards: {
		mainText: "Welcome to",
		underline: "ChesSBS",
		mainSubText: "Club",
		description: `
			Lorem ipsum dolor sit amet consectetur, adipisicing elit.
			Nostrum quam voluptatibus
		`,
		cards: [
			{
				heading: "Learn Chess With Us!",
				description: `
					Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis
					ratione.
				`,
				href: "/",
			},
			{
				heading: "Learn Chess With Us!",
				description: `
					Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis
					ratione.
				`,
				href: "/",
			},
			{
				heading: "Learn Chess With Us!",
				description: `
					Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis
					ratione.
				`,
				href: "/",
			},
		],
	},
	footer: FooterData,
};
