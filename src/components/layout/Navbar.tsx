import { useState } from "react";
import { Link } from "react-router-dom";
import { INavbarProps } from "../../types/interfaces/NavbarProps";

const HomeNavbar: React.FC<INavbarProps> = ({ logo, links }) => {
	const [isOpen, setOpen] = useState<Boolean>(false);
	return (
		<div className={`${isOpen ? "mb-60" : ""}`}>
			<svg
				className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-800 transform translate-x-1/2"
				fill="currentColor"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<polygon points="50,0 100,0 50,100 0,100" />
			</svg>
			<div>
				<div className="relative pt-6 px-4 sm:px-6 lg:px-8">
					<nav
						className="relative flex items-center justify-between sm:h-10 lg:justify-start"
						aria-label="Global"
					>
						<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
							<div className="flex items-center justify-between w-full md:w-auto">
								<Link to="/">
									<img
										className="h-8 w-auto sm:h-10"
										src={logo}
										alt="logo"
									/>
									{/* https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg*/}
								</Link>
								<div
									className={`-mr-2 flex items-center md:hidden`}
								>
									<button
										type="button"
										className=" rounded-md p-2 inline-flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
										aria-expanded="false"
										onClick={(e) => {
											e.preventDefault();
											setOpen(!isOpen);
										}}
									>
										<span className="sr-only">
											Open main menu
										</span>
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
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 z-20">
							{links.map((link) => {
								return (
									<Link
										to={link.href}
										className={`font-medium ${
											link.defaultColor === "white"
												? "text-white"
												: "text-indigo-600"
										} hover:text-indigo-500`}
									>
										{link.text}
									</Link>
								);
							})}
						</div>
					</nav>
				</div>

				<div
					className={`absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${
						isOpen ? "" : "hidden"
					}`}
				>
					<div className="rounded-lg shadow-md bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
						<div className="px-5 pt-4 flex items-center justify-between">
							<div>
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
									alt=""
								/>
							</div>
							<div className="-mr-2">
								<button
									type="button"
									className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
									onClick={(e) => {
										e.preventDefault();
										setOpen(!isOpen);
									}}
								>
									<span className="sr-only">
										Close main menu
									</span>
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
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div className="px-2 pt-2 pb-3 space-y-1 z-20">
							{links.map((link) => {
								return (
									<Link
										to={link.href}
										className={`block px-3 py-2 rounded-md text-base font-medium ${
											link.defaultColor === "white"
												? "text-white"
												: "text-indigo-600"
										} hover:text-white hover:bg-indigo-600`}
									>
										{link.text}
									</Link>
								);
							})}
						</div>
						<Link
							to="#"
							className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
						>
							{" "}
							Log in{" "}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeNavbar;
