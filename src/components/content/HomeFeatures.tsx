import React, { FC } from "react";
import { IFeatureProps } from "../../types/interfaces/FeatureProps";

const HomeFeatures: FC<IFeatureProps> = ({heading, subheading, description, content}) => {
	return (
		<div className="py-12 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:text-center">
					<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
						{heading}
					</h2>
					<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						{subheading}
					</p>
					<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
						{description}
					</p>
				</div>

				<div className="mt-10">
					<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {content.map((item) => {
                            return (
								<div className="relative">
									<dt>
										<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
											<svg
												className="h-6 w-6"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
												/>
											</svg>
										</div>
										<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
											{item.heading}
										</p>
									</dt>
									<dd className="mt-2 ml-16 text-base text-gray-500">
										{item.description}
									</dd>
								</div>
							);
                        })}

					</dl>
				</div>
			</div>
		</div>
	);
};

export default HomeFeatures;
