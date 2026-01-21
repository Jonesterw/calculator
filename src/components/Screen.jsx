const Screen = ({ display1, display2, display3 }) => {
	return (
		<div className="relative flex justify-end items-center w-207.25 h-43 bg-[#1F2937] rounded-lg p-4 mb-2 ring-1 ring-[#495260]">
			<div className="absolute top-7 right-4 ">
				<p className="text-[#9CA3AF] text-lg">{display2}</p>
			</div>
			<div className="absolute">
				<p className="text-white font-bold text-5xl">{display1}</p>
			</div>
			<div className="absolute bottom-7 right-4 ">
				<p className="text-[#518ff3] text-lg">{display3}</p>
			</div>
		</div>
	);
};
export default Screen;
