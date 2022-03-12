import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import SearchBar from "../serchbar/SearchBar";
import { useAuth0 } from "@auth0/auth0-react";

const NavShop = () => {
	const { isAuthenticated, user, loginWithRedirect } = useAuth0();
	const user_id = user?.sub.split("|")[1];
	// console.log(user);

	return (
		<div className="font-poppins w-full h-24 bg-ochre flex justify-between">
			<div className="w-1/2 flex justify-start items-center p-1">
				<Link to="/home" className="ml-4">
					<img src={logo} className="w-20" alt="logo" />
				</Link>
				<div className="ml-4">
					<SearchBar />
				</div>
			</div>
			<div
				className={
					isAuthenticated
						? "w-1/4 flex justify-around items-center mr-8"
						: "w-1/6 flex justify-beetwen items-center mr-8"
				}
			>
				{isAuthenticated ? (
					<div className="flex items-center">
						<h3 className="mr-3">Bienvenido {user?.name}</h3>
						<img
							src={user.picture}
							alt="logo"
							className="w-10 rounded-full mr-3"
						/>
						<Link to={`/settings/${user_id}`}>
							<button className="flex items-center justify-center w-38 mr-3 px-4 py-2 space-x-3 text-sm text-center bg-darkGreen text-isabelline transition-colors duration-200 transform dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700 rounded-md">
								Panel de Usuario
							</button>
						</Link>
					</div>
				) : (
					<button
						onClick={() => loginWithRedirect()}
						className="flex items-center justify-center w-38 mr-3 px-4 py-2 space-x-3 text-sm text-center bg-darkGreen text-isabelline transition-colors duration-200 transform dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700 rounded-md"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-user-circle"
							width="28"
							height="28"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="#ffffff"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<circle cx="12" cy="12" r="9" />
							<circle cx="12" cy="10" r="3" />
							<path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
						</svg>
						<span className="text-sm text-white dark:text-gray-200">
							Iniciar / Crear Cuenta
						</span>
					</button>
				)}
			</div>
		</div>
	);
};

export default NavShop;