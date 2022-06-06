import { IAboutHeroProps } from "./AboutHeroProps";
import { IAboutTeamProps } from "./AboutTeamProps";
import { IFooterProps } from "./FooterProps";
import { INavbarProps } from "./NavbarProps";

export interface IAboutData {
    nav: INavbarProps,
    hero: IAboutHeroProps,
    team: IAboutTeamProps,
    footer: IFooterProps
}