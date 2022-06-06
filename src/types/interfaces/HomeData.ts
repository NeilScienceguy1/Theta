import { ICardProps } from "./CardProps";
import { IFeatureProps } from "./FeatureProps";
import { IFooterProps } from "./FooterProps";
import { IHeroProps } from "./HeroProps";
import { INavbarProps } from "./NavbarProps";

export interface IHomeData {
    nav: INavbarProps,
    hero: IHeroProps,
    features: IFeatureProps,
    cards: ICardProps,
    footer: IFooterProps
}