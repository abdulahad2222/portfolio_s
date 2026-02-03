export default function Loading() {
	return (
		<div className="fixed top-0 left-0 flex flex-col justify-center items-center h-screen w-screen bg-black/80 dark:bg-black/95 backdrop-blur-lg z-[999]">
			<div className="flex flex-col items-center">
				{/* Glassmorphic Loader with Pulse and Spinner */}
				<div className="relative flex items-center justify-center mb-6">
					<div className="absolute animate-ping rounded-full h-24 w-24 bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 opacity-30"></div>
					<div className="relative animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 dark:border-cyan-400 border-solid"></div>
					<div className="absolute inset-0 flex items-center justify-center">
						<span className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent select-none tracking-widest">AA</span>
					</div>
				</div>
				<h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent mt-4 tracking-wide">Loading...</h1>
			</div>
		</div>
	);
}
