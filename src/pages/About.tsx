import React, { FC } from "react";
import AboutHero from "../components/content/AboutHero";
import AboutTeamSection from "../components/content/AboutTeamSection";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { IAboutData } from "../types/interfaces/AboutData";

const About: FC<IAboutData> = ({nav, hero, team, footer}) => {
	return (
		<div className="">
			<div className="relative bg-gray-800 overflow-hidden z-10">
				<div className="max-w-7xl mx-auto">
					<div className="relative z-10 pb-8 bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
						<Navbar
							links={nav.links}
							logo={nav.logo}
						/>
					</div>
				</div>
			</div>
            <AboutHero heading={hero.heading} description={hero.description} images={hero.images} buttonText={hero.buttonText}/>
			<AboutTeamSection heading={team.heading} description={team.description} team={team.team} />
			<Footer brand={footer.brand} tagline={footer.tagline} contentLinks={footer.contentLinks} dashboardLinks={footer.dashboardLinks} chessLinks={footer.chessLinks} contact={{
                phone: footer.contact.phone,
                email: footer.contact.email
            }} />
		</div>
	);
};

export default About;
