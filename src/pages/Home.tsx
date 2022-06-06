import React, { FC } from "react";
import HomeCards from "../components/content/HomeCards";
import HomeFeatures from "../components/content/HomeFeatures";
import HomeHero from "../components/content/HomeHero";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { IHomeData } from "../types/interfaces/HomeData";

const Home: FC<IHomeData> = ({ nav, footer, features, cards, hero }) => {
	return (
		<div className="">
			<div className="relative bg-gray-800 overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="relative z-10 pb-8 bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
						<Navbar logo={nav.logo} links={nav.links} />
						<HomeHero
							mainHead={hero.mainHead}
							mainSubhead={hero.mainSubhead}
							description={hero.description}
							buttonText={hero.buttonText}
						/>
					</div>
				</div>
				<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<img
						className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
						src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/RichardDai/phpSWK2Un.jpeg"
						alt=""
					/>
				</div>
			</div>
			<HomeFeatures
				heading={features.heading}
				description={features.description}
				subheading={features.subheading}
				content={features.content}
			/>
			<HomeCards
				mainText={cards.mainText}
				mainSubText={cards.mainSubText}
				underline={cards.underline}
				description={cards.description}
				cards={cards.cards}
			/>
			<Footer
				brand={footer.brand}
				tagline={footer.tagline}
				contact={footer.contact}
				chessLinks={footer.chessLinks}
				contentLinks={footer.contentLinks}
				dashboardLinks={footer.dashboardLinks}
			/>
		</div>
	);
};

export default Home;
