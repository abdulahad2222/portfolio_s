// components/Chat.jsx
"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Lightweight local chat UI (no external provider).
// - Floating button toggles panel
// - Messages persisted to localStorage
// - Placeholder hook to integrate an API/AI backend

// Edit CONTACTS below to include your real contact details.
const CONTACTS = {
	email: "shahidjit1998@gmail.com",
	phone: "7651986951",
	website: "/",
};

// Projects data
const PROJECTS = [
	{
		id: "p1",
		name: "OneStoryPlanet",
		title: "Social Networking Platform (Story-centric)",
		year: "2024",
		description: "OneStoryPlanet is a story-first social platform designed to empower individuals to share authentic life experiences through written, audio, and video formats—fostering meaningful human connection, empathy, and unity in a judgment-free environment.",
		skills: ["React", "Next.js", "Inertia.js", "Tailwind CSS", "Node.js", "Laravel", "Database", "AWS", "UI/UX Design", "Responsive Design", "Component-based Architecture"],
		url: "https://onestoryplanet.com",
		thumbnail: "/image/projects/web/onestory/onestoryplanet-thumbnale-img.png"
	},
	{
		id: "p2",
		name: "WoolfrApp",
		title: "LGBTQ+ Social Platform",
		year: "2023",
		description: "WoolfrApp is a next-generation LGBTQ+ social platform built for gay, bisexual, transgender, and queer communities. Enables real-time communication, community discovery, and key match–based profile connections.",
		skills: ["Bootstrap CSS", "Core PHP", "Node.js", "Socket.IO", "Google Cloud Vision API", "Leaflet Maps", "Database", "MySQL", "UI/UX Design", "Responsive Design"],
		url: "https://woolfrapp.com",
		thumbnail: "/image/projects/web/woolfr/woolfer_thumbnale.png"
	},
	{
		id: "p3",
		name: "Freelancer & Handyman Marketplace",
		title: "Unified Marketplace",
		year: "2024",
		description: "A unified marketplace for freelance and handyman services for businesses and individuals. Connects users with skilled professionals across digital, technical, and on-site services.",
		skills: ["Html/CSS", "Laravel", "MySQL", "Database", "UI/UX Design"],
		url: "https://wrqit.nextolive.com",
		thumbnail: "/image/projects/web/wrqit/wrqit_thubnale.png"
	},
	{
		id: "p4",
		name: "School Bus Track",
		title: "Smart Transportation Tracker",
		year: "2023",
		description: "School Bus Track is a smart platform that helps parents track their children’s daily school transportation. Provides real-time GPS tracking of school buses for accurate live location updates.",
		skills: ["React", "Leaflet Maps", "GPS Tracking", "Firebase Realtime Messaging", "Laravel", "MariaDB", "Database"],
		url: "https://schoolbustrack.com",
		thumbnail: "/image/projects/web/bustracking/bustracking_thubnale.png"
	},
	{
		id: "p5",
		name: "OpHop Admin Platform",
		title: "Admin Management Platform",
		year: "2024",
		description: "OpHop is a centralized admin platform for managing customers, organizations, and stores. Provides tools to manage products, bins, and categories efficiently.",
		skills: ["Vue.js", "Tailwind CSS", "Laravel", "MySQL", "Database", "UI/UX Design", "Admin Dashboard", "Responsive Design"],
		url: "https://ophop.org",
		thumbnail: "/image/projects/web/ophop/ophop_dashboard_thubnale.png"
	},
	{
		id: "p6",
		name: "Bookie Inventory Management System",
		title: "Inventory & Project Management",
		year: "2025",
		description: "A role-based inventory and project management system designed for bookie operations. Supports Admin, Bookie, and User roles with controlled access and permissions.",
		skills: ["React", "Node.js", "mongoDB", "Role-Based Access Control"],
		url: "http://108.60.209.215:3738",
		thumbnail: "/image/projects/web/bookieinventorymanagement/bookie_thumbnale.png"
	},
	{
		id: "p7",
		name: "Nutri Calorie App",
		title: "Health & Nutrition Tracker",
		year: "2025",
		description: "Nutri Calorie App is a smart health and nutrition tracking application for daily wellness. Calculates daily calorie intake based on food, drinks, and meal types.",
		skills: ["React", "Node.js", "mongoDB", "Nutrition API", "Calorie Calculation", "Chatgpt API", "Html/CSS", "Tailwind CSS"],
		url: "http://108.60.209.215:3210",
		thumbnail: "/image/projects/web/nutri/nutri_thumbnale.png"
	},
	{
		id: "p8",
		name: "Adult Playpen",
		title: "Social Sharing Network",
		year: "2025",
		description: "Adult Playpen is an adult-focused social sharing network inspired by Facebook-style interactions. Supports multiple connection intents including Dating, Relationships, Friends, and Networking.",
		skills: ["React", "Node.js", "Socket.IO", "MongoDB", "Google Cloud Vision API", "Chatgpt API", "Role-Based Access Control", "UI/UX Design", "Responsive Design"],
		url: "https://adultplaypen.com/",
		thumbnail: "/image/projects/web/adultplaypen/adult_thubnale.png"
	},
	{
		id: "p9",
		name: "Reward App",
		title: "User Engagement Platform",
		year: "2022",
		description: "A digital reward platform designed to incentivize user engagement and activity. Allows users to earn rewards through tasks, actions, or participation.",
		skills: ["Html/CSS", "Laravel", "MySQL", "Database", "UI/UX Design"],
		url: "https://rewardapp.com",
		thumbnail: "/image/projects/web/rewardapp/reward_thubnale.png"
	}
];

// Demo Q&A structure - questions and their follow-up options
const DEMO_QUESTIONS = {
	initial: [
		{ id: "q1", text: "What services do you offer?" },
		{ id: "q2", text: "How can I contact you?" },
		{ id: "q3", text: "What are your business hours?" },
		{ id: "q4", text: "Do you have pricing information?" },
		{ id: "q5", text: "View my projects" },
		{ id: "q6", text: "Education & Experience" },
	],
	q1: [
		{ id: "q1a", text: "Tell me more about service A" },
		{ id: "q1b", text: "What about service B?" },
		{ id: "q1c", text: "Do you offer custom solutions?" },
	],
	q2: [
		{ id: "q2a", text: "What's your email address?" },
		{ id: "q2b", text: "What's your phone number?" },
		{ id: "q2c", text: "Where is your office located?" },
	],
	q3: [
		{ id: "q3a", text: "Are you open on weekends?" },
		{ id: "q3b", text: "What time do you close?" },
		{ id: "q3c", text: "Do you have holiday hours?" },
	],
	q4: [
		{ id: "q4a", text: "What's your starting price?" },
		{ id: "q4b", text: "Do you offer discounts?" },
		{ id: "q4c", text: "Can I get a custom quote?" },
	],
	q5: [
		{ id: "q5a", text: "Tell me about OneStoryPlanet" },
		{ id: "q5b", text: "Tell me about WoolfrApp" },
		{ id: "q5c", text: "Tell me about Freelancer Marketplace" },
		{ id: "q5d", text: "Tell me about School Bus Track" },
		{ id: "q5e", text: "Tell me about OpHop Admin" },
		{ id: "q5f", text: "Tell me about Bookie Inventory" },
		{ id: "q5g", text: "Tell me about Nutri Calorie App" },
		{ id: "q5h", text: "Tell me about Adult Playpen" },
		{ id: "q5i", text: "Tell me about Reward App" },
	],
};

// Demo answers for each question
const DEMO_ANSWERS = {
	q1: "We offer a wide range of services including web development, mobile apps, digital marketing, and consulting. Which specific service interests you?",
	q2: "You can reach us via email at shahidjit1998@gmail.com or call us at 7651986951. We're here to help!",
	q3: "Our business hours are Monday to Friday, 9 AM to 6 PM. We're also available for urgent matters outside these hours.",
	q4: "Our pricing varies based on the project scope and requirements. We offer competitive rates and can provide a custom quote. Would you like more details?",
	q5: "Here are some of my recent projects. Click on any project to learn more about it!",
	q1a: "Service A includes comprehensive web development solutions with modern frameworks and responsive design.",
	q1b: "Service B focuses on mobile app development for both iOS and Android platforms.",
	q1c: "Yes! We specialize in custom solutions tailored to your specific business needs.",
	q5a: `**OneStoryPlanet** - Social Networking Platform (Story-centric)\n\n**Duration:** 2024\n\n**Description:** ${PROJECTS[0].description}\n\n**Technologies:** ${PROJECTS[0].skills.join(", ")}\n\n**Live Website:** ${PROJECTS[0].url}`,
	q5b: `**WoolfrApp** - LGBTQ+ Social Platform\n\n**Duration:** 2023\n\n**Description:** ${PROJECTS[1].description}\n\n**Technologies:** ${PROJECTS[1].skills.join(", ")}\n\n**Live Website:** ${PROJECTS[1].url}`,
	q5c: `**Freelancer & Handyman Marketplace** - Unified Marketplace\n\n**Duration:** 2024\n\n**Description:** ${PROJECTS[2].description}\n\n**Technologies:** ${PROJECTS[2].skills.join(", ")}\n\n**Live Website:** ${PROJECTS[2].url}`,
	q5d: `**School Bus Track** - Smart Transportation Tracker\n\n**Duration:** 2023\n\n**Description:** ${PROJECTS[3].description}\n\n**Technologies:** ${PROJECTS[3].skills.join(", ")}\n\n**Live Website:** ${PROJECTS[3].url}`,
	q5e: `**OpHop Admin Platform** - Admin Management Platform\n\n**Duration:** 2024\n\n**Description:** ${PROJECTS[4].description}\n\n**Technologies:** ${PROJECTS[4].skills.join(", ")}\n\n**Live Website:** ${PROJECTS[4].url}`,
	q5f: `**Bookie Inventory Management System** - Inventory & Project Management\n\n**Duration:** 2025\n\n**Description:** ${PROJECTS[5].description}\n\n**Technologies:** ${PROJECTS[5].skills.join(", ")}\n\n**Live Website:** ${PROJECTS[5].url}`,
	q5g: `**Nutri Calorie App** - Health & Nutrition Tracker\n\n**Duration:** 2025\n\n**Description:** ${PROJECTS[6].description}\n\n**Technologies:** ${PROJECTS[6].skills.join(", ")}\n\n**Live Website:** ${PROJECTS[6].url}`,
	q5h: `**Adult Playpen** - Social Sharing Network\n\n**Duration:** 2025\n\n**Description:** ${PROJECTS[7].description}\n\n**Technologies:** ${PROJECTS[7].skills.join(", ")}\n\n**Live Website:** ${PROJECTS[7].url}`,
	q5i: `**Reward App** - User Engagement Platform\n\n**Duration:** 2022\n\n**Description:** ${PROJECTS[8].description}\n\n**Technologies:** ${PROJECTS[8].skills.join(", ")}\n\n**Live Website:** ${PROJECTS[8].url}`,
	q2a: `Our email is: ${CONTACTS.email}`,
	q2b: `Our phone number is: ${CONTACTS.phone}`,
	q2c: "We operate remotely but can arrange in-person meetings if needed. Let me know your location!",
	q3a: "We're available on weekends for urgent matters. Regular support is Monday to Friday.",
	q3b: "We close at 6 PM on weekdays, but you can always leave a message and we'll get back to you.",
	q3c: "Yes, we have special holiday hours. Please contact us for specific holiday schedules.",
	q4a: "Our starting prices vary by service. Basic packages start from affordable rates. Would you like a detailed breakdown?",
	q4b: "Yes! We offer discounts for long-term projects and bulk services. Let's discuss your needs.",
	q4c: "Absolutely! We'd be happy to provide a custom quote based on your specific requirements.",
	q6: "I hold a B.Tech from Dr. A P J Abdul Kalam Technical University, Lucknow (08/2014 - 04/2018). Currently, I'm working as a PHP Laravel Developer at Next Olive Technologies (since July 2023). Previously, I was a PHP Developer at Aavatar IT Solution (May 2022 - June 2023).",
};

const Chat = () => {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState(() => {
		try {
			return JSON.parse(localStorage.getItem("app_chat_messages") || "[]");
		} catch (e) {
			return [];
		}
	});
	const listRef = useRef(null);
	const [showQuick, setShowQuick] = useState(false);
	const [showQuickReplies, setShowQuickReplies] = useState(null); // Track which quick replies to show (messageId -> questionKey)
	const [clickedQuestions, setClickedQuestions] = useState(new Set()); // Track which questions have been clicked
	const [hasStartedChatting, setHasStartedChatting] = useState(() => {
		// Check if there are any messages in localStorage
		try {
			const stored = localStorage.getItem("app_chat_messages");
			return stored && JSON.parse(stored).length > 0;
		} catch (e) {
			return false;
		}
	});
	const [expandedMessages, setExpandedMessages] = useState(new Set()); // Track which messages are expanded
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		localStorage.setItem("app_chat_messages", JSON.stringify(messages));
	}, [messages]);

	useEffect(() => {
		if (open) scrollToBottom();
	}, [open, messages]);

	useEffect(() => {
		// Check for dark mode
		const checkDarkMode = () => {
			if (document.documentElement.classList.contains('dark')) {
				setIsDarkMode(true);
			} else {
				setIsDarkMode(false);
			}
		};

		checkDarkMode();

		// Watch for dark mode changes
		const observer = new MutationObserver(checkDarkMode);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});

		return () => observer.disconnect();
	}, []);

	function scrollToBottom() {
		requestAnimationFrame(() => {
			if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
		});
	}

	function sendMessage(text = null) {
		const txt = text || input.trim();
		if (!txt) return;
		setHasStartedChatting(true); // Hide welcome message
		const userMsg = { id: Date.now(), author: "you", text: txt, time: new Date().toISOString() };
		setMessages((m) => [...m, userMsg]);
		setInput("");

		// Show quick reply options after user message
		setShowQuickReplies({ messageId: userMsg.id, questionKey: "initial" });

		// Simulated reply — replace this with an API call integration.
		setTimeout(() => {
			const botMsg = {
				id: Date.now() + 1,
				author: "owner",
				text: "Thanks — I received your message. I'll reply shortly.",
				time: new Date().toISOString(),
			};
			setMessages((m) => [...m, botMsg]);
		}, 700);
	}

	function handleQuickReply(questionId, questionText) {
		setHasStartedChatting(true); // Hide welcome message
		// Mark this question as clicked
		setClickedQuestions((prev) => new Set([...prev, questionId]));

		// Send the question as user message
		const userMsg = {
			id: Date.now(),
			author: "you",
			text: questionText,
			time: new Date().toISOString(),
		};
		setMessages((m) => [...m, userMsg]);

		// Hide current quick replies
		setShowQuickReplies(null);

		// Special handling for projects (q5)
		if (questionId === "q5") {
			setTimeout(() => {
				const botMsg = {
					id: Date.now() + 1,
					author: "owner",
					text: DEMO_ANSWERS[questionId],
					time: new Date().toISOString(),
					showProjects: true, // Flag to show projects
				};
				setMessages((m) => [...m, botMsg]);

				// Show follow-up quick replies
				if (DEMO_QUESTIONS[questionId]) {
					setTimeout(() => {
						setShowQuickReplies({ messageId: botMsg.id, questionKey: questionId });
					}, 300);
				}
			}, 700);
			return;
		}

		// Get the answer
		const answer = DEMO_ANSWERS[questionId] || "Thanks for your question. I'll get back to you soon!";

		// Show bot response
		setTimeout(() => {
			const botMsg = {
				id: Date.now() + 1,
				author: "owner",
				text: answer,
				time: new Date().toISOString(),
			};
			setMessages((m) => [...m, botMsg]);

			// Show follow-up quick replies if available
			if (DEMO_QUESTIONS[questionId]) {
				setTimeout(() => {
					setShowQuickReplies({ messageId: botMsg.id, questionKey: questionId });
				}, 300);
			}
		}, 700);
	}

	function handleKey(e) {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	}

	function clearChat() {
		setMessages([]);
		setShowQuickReplies(null);
		setClickedQuestions(new Set());
		setHasStartedChatting(false); // Show welcome message again
		localStorage.removeItem("app_chat_messages");
	}

	function sendContact(type) {
		const text = CONTACTS[type] || "";
		if (!text) return;
		const contactMsg = {
			id: Date.now() + Math.floor(Math.random() * 1000),
			author: "owner",
			text,
			time: new Date().toISOString(),
		};
		setMessages((m) => [...m, contactMsg]);
		setShowQuick(false);
		setOpen(true);
	}

	function handleContactClick(type) {
		const contactInfo = CONTACTS[type];
		if (!contactInfo) return;

		const contactMsg = {
			id: Date.now() + Math.floor(Math.random() * 1000),
			author: "owner",
			text: type === "email" ? `Email: ${contactInfo}` : type === "phone" ? `Phone: ${contactInfo}` : contactInfo,
			time: new Date().toISOString(),
		};
		setMessages((m) => [...m, contactMsg]);
	}

	function toggleMessageExpand(messageId) {
		setExpandedMessages((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(messageId)) {
				newSet.delete(messageId);
			} else {
				newSet.add(messageId);
			}
			return newSet;
		});
	}

	function shouldTruncate(text) {
		return text && text.length > 200;
	}

	function truncateText(text, maxLength = 200) {
		if (!text || text.length <= maxLength) return text;
		return text.substring(0, maxLength) + "...";
	}

	return (
		<>
			<button
				aria-label={open ? "Close chat" : "Open chat"}
				onClick={() => setOpen((v) => !v)}
				className="fixed z-50 right-4 bottom-6 md:bottom-8 md:right-8 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					{open ? (
						<path d="M6 18L18 6M6 6l12 12" />
					) : (
						<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
					)}
				</svg>
			</button>

			{open && (
				<div className="fixed z-50 right-4 bottom-20 md:bottom-24 md:right-8 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col">
					<div className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">💬</div>
							<div>
								<div className="font-semibold">Chat with owner</div>
								<div className="text-xs opacity-80">Typically replies within a few minutes</div>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div className="relative">
								<button onClick={() => setShowQuick((s) => !s)} className="text-sm text-white/90 hover:underline mr-2">Contact</button>
								{showQuick && (
									<div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md shadow-lg border border-gray-100 dark:border-gray-700 z-50">
										<button onClick={() => sendContact('email')} className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Share email</button>
										<button onClick={() => sendContact('phone')} className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Share phone</button>
										{/* <button onClick={() => sendContact('website')} className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Share website</button> */}
									</div>
								)}
							</div>
							<button onClick={clearChat} className="text-sm text-white/90 hover:underline">Clear</button>
						</div>
					</div>

					<div
						ref={listRef}
						className="h-[400px] px-4 py-3 overflow-y-auto space-y-3 bg-gray-50 dark:bg-gray-900 project-scrollbar min-h-0"
						style={{
							scrollbarWidth: 'thin',
							scrollbarColor: isDarkMode ? '#475569 transparent' : '#cbd5e1 transparent'
						}}
					>
						<style dangerouslySetInnerHTML={{
							__html: `
								.project-scrollbar::-webkit-scrollbar {
									width: 8px;
								}
								.project-scrollbar::-webkit-scrollbar-track {
									background: rgba(0, 0, 0, 0.05);
									border-radius: 4px;
								}
								.project-scrollbar::-webkit-scrollbar-thumb {
									background-color: #cbd5e1;
									border-radius: 4px;
									border: 1px solid rgba(0, 0, 0, 0.1);
								}
								.project-scrollbar::-webkit-scrollbar-thumb:hover {
									background-color: #94a3b8;
								}
								.dark .project-scrollbar::-webkit-scrollbar-track {
									background: rgba(255, 255, 255, 0.05);
								}
								.dark .project-scrollbar::-webkit-scrollbar-thumb {
									background-color: #475569;
									border: 1px solid rgba(255, 255, 255, 0.1);
								}
								.dark .project-scrollbar::-webkit-scrollbar-thumb:hover {
									background-color: #64748b;
								}
								.bg-blue-600 .project-scrollbar::-webkit-scrollbar-thumb {
									background-color: rgba(255, 255, 255, 0.3);
									border: 1px solid rgba(255, 255, 255, 0.2);
								}
								.bg-blue-600 .project-scrollbar::-webkit-scrollbar-thumb:hover {
									background-color: rgba(255, 255, 255, 0.5);
								}
								.bg-gray-50.project-scrollbar::-webkit-scrollbar-thumb {
									background-color: #cbd5e1;
								}
								.dark .bg-gray-900.project-scrollbar::-webkit-scrollbar-thumb {
									background-color: #475569;
								}
								.bg-gray-50.project-scrollbar::-webkit-scrollbar-thumb:hover {
									background-color: #94a3b8;
								}
								.dark .bg-gray-900.project-scrollbar::-webkit-scrollbar-thumb:hover {
									background-color: #64748b;
								}
							`
						}} />
						{messages.length === 0 && !hasStartedChatting && (
							<div className="space-y-4">
								<div className="text-center">
									<div className="text-base font-semibold text-gray-700 dark:text-gray-200 mb-1">Welcome! 👋</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">How can I help you today? Feel free to ask me anything or choose a quick question below.</div>
								</div>
								<div className="flex flex-col gap-2">
									<div className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium">Quick questions:</div>
									{DEMO_QUESTIONS.initial.map((q) => (
										<button
											key={q.id}
											onClick={() => handleQuickReply(q.id, q.text)}
											disabled={clickedQuestions.has(q.id)}
											className={`px-4 py-2 text-sm rounded-lg border transition-all text-left ${clickedQuestions.has(q.id)
												? "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-600 cursor-not-allowed"
												: "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer"
												}`}
										>
											{q.text}
										</button>
									))}
								</div>
							</div>
						)}
						{messages.map((m, index) => {
							const showReplies = showQuickReplies?.messageId === m.id;
							const questionKey = showQuickReplies?.questionKey;
							const quickReplies = questionKey ? DEMO_QUESTIONS[questionKey] : null;
							// Show contact info on the last message if it's from owner
							const isLastMessage = index === messages.length - 1;
							const showContactInfo = isLastMessage && m.author === "owner";

							const isExpanded = expandedMessages.has(m.id);
							const shouldShowReadMore = shouldTruncate(m.text);
							const displayText = shouldShowReadMore && !isExpanded ? truncateText(m.text) : m.text;

							return (
								<div key={m.id}>
									<div className={`flex ${m.author === "you" ? "justify-end" : "justify-start"}`}>
										<div className={`max-w-[80%] px-3 py-2 rounded-lg ${m.author === "you" ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-100 dark:border-gray-700"}`}>
											<div
												className={`text-sm whitespace-pre-wrap ${isExpanded ? 'max-h-[400px] overflow-y-auto pr-1 project-scrollbar' : ''}`}
												style={isExpanded ? {
													scrollbarWidth: 'thin',
													scrollbarColor: m.author === "you" ? 'rgba(255,255,255,0.3) transparent' : '#cbd5e1 transparent'
												} : {}}
											>
												{displayText}
											</div>
											{shouldShowReadMore && (
												<button
													onClick={() => toggleMessageExpand(m.id)}
													className={`text-xs mt-1 underline hover:no-underline ${m.author === "you" ? "text-white/80 hover:text-white" : "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"}`}
												>
													{isExpanded ? "Read Less" : "Read More"}
												</button>
											)}
											<div className="text-[10px] opacity-60 text-right mt-1">
												{new Date(m.time).toLocaleTimeString([], {
													hour: "2-digit",
													minute: "2-digit",
												})}
											</div>

										</div>
									</div>
									{m.showProjects && (
										<div className="mt-3 space-y-3 max-h-[500px] overflow-y-auto pr-2 project-scrollbar" style={{
											scrollbarWidth: 'thin',
											scrollbarColor: '#cbd5e1 transparent'
										}}>
											{PROJECTS.map((project) => (
												<div
													key={project.id}
													className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
												>
													<div className="h-40 w-full overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
														<Image
															src={project.thumbnail}
															alt={project.name}
															className="w-full h-full object-cover"
															onError={(e) => {
																const parent = e.target.parentElement;
																e.target.style.display = 'none';
																if (!parent.querySelector('.fallback-text')) {
																	const fallback = document.createElement('div');
																	fallback.className = 'text-gray-600 dark:text-gray-300 font-bold text-lg fallback-text';
																	fallback.textContent = project.name;
																	parent.appendChild(fallback);
																}
															}}
														/>
													</div>
													<div className="p-3">
														<div className="flex items-start justify-between mb-2">
															<div>
																<h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100">{project.title}</h4>
																<p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{project.year}</p>
															</div>
														</div>
														<div className="max-h-32 overflow-y-auto mb-2 pr-1 project-scrollbar" style={{
															scrollbarWidth: 'thin',
															scrollbarColor: '#cbd5e1 transparent'
														}}>
															<p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
														</div>
														<div className="flex flex-wrap gap-1 mb-2 max-h-20 overflow-y-auto pr-1 project-scrollbar" style={{
															scrollbarWidth: 'thin',
															scrollbarColor: '#cbd5e1 transparent'
														}}>
															{project.skills.map((skill, idx) => (
																<span
																	key={idx}
																	className="px-2 py-0.5 text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded whitespace-nowrap"
																>
																	{skill}
																</span>
															))}
														</div>
														<a
															href={project.url}
															target="_blank"
															rel="noopener noreferrer"
															className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
														>
															Visit Website
															<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
															</svg>
														</a>
													</div>
												</div>
											))}
										</div>
									)}
									{showReplies && quickReplies && (
										<div className="mt-2 flex flex-wrap gap-2 justify-start">
											{quickReplies.map((q) => (
												<button
													key={q.id}
													onClick={() => handleQuickReply(q.id, q.text)}
													disabled={clickedQuestions.has(q.id)}
													className={`px-3 py-1.5 text-xs rounded-full border transition-all ${clickedQuestions.has(q.id)
														? "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-600 cursor-not-allowed"
														: "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer"
														}`}
												>
													{q.text}
												</button>
											))}
										</div>
									)}
									{showContactInfo && (
										<div className="mt-2 flex flex-wrap gap-2 justify-start">
											<button
												onClick={() => handleContactClick('email')}
												className="px-3 py-1.5 text-xs rounded-full border bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer transition-all flex items-center gap-1.5"
											>
												<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
												</svg>
												Email
											</button>
											<button
												onClick={() => handleContactClick('phone')}
												className="px-3 py-1.5 text-xs rounded-full border bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer transition-all flex items-center gap-1.5"
											>
												<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
												</svg>
												Phone
											</button>
										</div>
									)}
								</div>
							);
						})}
					</div>

					<div className="px-3 py-2 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
						<textarea
							value={input}
							onChange={(e) => {
								setInput(e.target.value);
								if (e.target.value.trim().length > 0) {
									setHasStartedChatting(true); // Hide welcome message when user starts typing
								}
							}}
							onKeyDown={handleKey}
							rows={1}
							placeholder="Type a message..."
							className="w-full resize-none rounded-md p-2 text-sm bg-gray-50  dark:text-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 focus:outline-none"
						/>
						<div className="flex items-center justify-end mt-2">
							{/* <div className="text-xs text-gray-500">Messages stored locally</div> */}
							<div className="flex items-center gap-2">
								<button
									onClick={() => { setInput(""); setOpen(false); }}
									className="text-sm text-gray-600 hover:underline"
								>
									Close
								</button>
								<button
									onClick={sendMessage}
									className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm shadow"
								>
									Send
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Chat;
