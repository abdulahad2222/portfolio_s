"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faFolderOpen,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
	const handleMoveToSection = (index) => {
		fullpage_api.moveTo(index);
		fullpage_api.getActiveSection();
	};

	const containIsActive = (index) => {
		if (fullpage_api.getActiveSection().index === index) {
			return "bg-gray-500";
		}
		return "";
	};
		return (
			<div className="hidden md:flex fixed z-40 bg-gradient-to-b from-teal-700 via-cyan-900 to-violet-900 dark:from-[#134e4a] dark:via-[#0e7490] dark:to-[#6d28d9] h-[50vh] w-14 flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl shadow-2xl">
				<ul
					id="sidebar"
					className="flex flex-col justify-evenly items-center h-full text-gray-100 dark:text-cyan-100">
				<li data-menuanchor="home" className="active cursor-pointer">
					<button onClick={() => handleMoveToSection(1)}>
						<FontAwesomeIcon icon={faHome} className="text-xl cursor-pointer transition-colors duration-300 group-hover:text-teal-300 dark:group-hover:text-cyan-300" />
					</button>
				</li>
				<li data-menuanchor="about " className="cursor-pointer">
					<button onClick={() => handleMoveToSection(2)}>
						<FontAwesomeIcon icon={faUser} className="text-xl cursor-pointer transition-colors duration-300 group-hover:text-teal-300 dark:group-hover:text-cyan-300" />
					</button>
				</li>
				<li data-menuanchor="projects" className="cursor-pointer">
					<button onClick={() => handleMoveToSection(3)}>
						<FontAwesomeIcon
							icon={faFolderOpen}
							className="text-xl cursor-pointer transition-colors duration-300 group-hover:text-teal-300 dark:group-hover:text-cyan-300"
						/>
					</button>
				</li>
				<li data-menuanchor="contact" className="cursor-pointer">
					<button onClick={() => handleMoveToSection(4)}>
						<FontAwesomeIcon
							icon={faEnvelope}
							className="text-xl cursor-pointer transition-colors duration-300 group-hover:text-teal-300 dark:group-hover:text-cyan-300"
						/>
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
