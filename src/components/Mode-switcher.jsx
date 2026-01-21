const Modeswitcher = () => {
	return (
		<div className="bg-[#1e2533] flex h-12.5 w-220">
			<div className="flex justify-center items-center w-full h-full hover:bg-[#374151]">
				<p className="text-[#9CA3AF] text-sm">Basic</p>
			</div>
			<div className="flex justify-center items-center w-full h-full hover:bg-[#374151]">
				<p className="text-[#9CA3AF] text-sm">Scientific</p>
			</div>
			<div className="flex justify-center items-center w-full h-full hover:bg-[#374151]">
				<p className="text-[#9CA3AF] text-sm">Advanced</p>
			</div>
			<div className="flex justify-center items-center w-full h-full hover:bg-[#374151]">
				<p className="text-[#9CA3AF] text-sm ">Programmer</p>
			</div>
		</div>
	);
};

export default Modeswitcher;
/* TODO: Add functionality to change modes, angles, and memory values */
