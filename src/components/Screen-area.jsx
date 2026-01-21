import Screen from "./Screen.jsx";
import Modes from "./Modes.jsx";
const Screenarea = ({ display1, display2, display3 }) => {
	return (
		<div className="flex flex-col items-center bg-[#111827] w-220 h-73.5 p-4.75 rounded-t-xl">
			<Screen display1={display1} display2={display2} display3={display3} />
			<Modes />
		</div>
	);
};
export default Screenarea;
