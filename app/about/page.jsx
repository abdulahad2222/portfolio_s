"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";
import FixedButton from "@/components/FixedButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Quote from "./components/quote/quote.jsx";
import Skills from "./components/skills/skills.jsx";
import Experience from "./components/experience.jsx";
import Education from "./components/education.jsx";

// images
const Hero = "/image/me2.jpg";

import Hr from "@/components/Hr";
import About from "./components/about/about.jsx";

export default function Page() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<main className="overflow-hidden">
				<FixedButton href="/#about">
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-black dark:text-white pr-10"
					/>
				</FixedButton>
				<div className="relative h-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
					{/* hero */}
					<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ ease: "circOut", duration: 1 }}
							className="bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 shadow-2xl dark:shadow-2xl">
							<Image
								src={Hero}
								alt="Shahid Ansari"
								layout="fill"
								objectFit="cover"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-white/50 dark:bg-gray-900/30 md:bg-transparent md:pt-0 rounded-lg md:rounded-none">
						<h1 className="md:bg-white dark:md:bg-transparent bg-transparent lg:bg-transparent bg-opacity-50 md:px-0 text-black dark:text-white text-5xl md:text-8xl font-bold">
							About Me
						</h1>
						<Hr theme="purple" />
						<p className="title text-xl mt-4 tracking-wider text-gray-900 dark:text-gray-300 leading-[1.7rem] mb-5 ">
							A brief introduction about me and{" "}
							<span className="bg-transparent md:bg-gray-100 dark:md:bg-transparent bg-opacity-50 xl:bg-transparent">
								{" "}
								my interest.
							</span>
						</p>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3">
							<Button variation="primary" theme="purple">Scroll Down</Button>
						</motion.div>
					</div>
				</div>
				{/* end hero */}

				{/* about */}
				<About />
				{/* end about */}

				{/* skills */}
				<Skills />
				{/* end skills */}

				{/* experience */}
				<Experience />
				{/* end experience */}

				{/* Education */}
				<Education />
				{/* end Education */}

				{/* Quote */}
				<Quote />
				{/* end Quote */}

			</main>
		</>
	);
}
