import { INavbarProps } from "../../types/interfaces/NavbarProps";

export const NavbarData: INavbarProps = {
	links: [
		{
			text: "Home",
			href: "/",
			defaultColor: "white",
		},
		{
			text: "About",
			href: "/about",
			defaultColor: "white",
		},
		{
			text: "Dashboard",
			href: "/dashboard/app",
			defaultColor: "white",
		},
		{
			text: "Resources",
			href: "/",
			defaultColor: "white",
		},
		{
			text: "Login",
			href: "/",
			defaultColor: "indigo",
		},
	],
	logo: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
};