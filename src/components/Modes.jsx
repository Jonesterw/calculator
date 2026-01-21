const Modes = () => {
	return (
		<div className="flex w-208.25 h-21.25 p-2 gap-2">
			<div className="relative w-full h-full bg-[#374151] rounded-lg">
				<div className="absolute top-3 left-3">
					<p className="text-[#9CA3AF] text-sm">Mode</p>
				</div>
				<div className="absolute bottom-2 left-3">
					<p className="text-white font-bold text-lg">Basic</p>
				</div>
			</div>
			<div className="relative w-full h-full bg-[#374151] rounded-lg">
				<div className="absolute top-3 left-3">
					<p className="text-[#9CA3AF] text-sm">Angle</p>
				</div>
				<div className="absolute bottom-2 left-3">
					<p className="text-white font-bold text-lg">Radians</p>
				</div>
			</div>
			<div className="relative w-full h-full bg-[#374151] rounded-lg">
				<div className="absolute top-3 left-3">
					<p className="text-[#9CA3AF] text-sm">Memory</p>
				</div>
				<div className="absolute bottom-2 left-3">
					<p className="text-white font-bold text-lg">0</p>
				</div>
			</div>
		</div>
	);
};
export default Modes;
/* TODO: Add functionality to change modes, angles, and memory values */
