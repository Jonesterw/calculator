import BasicFunctions from "./components/Basic-Functions";
import Screenarea from "./components/Screen-area.jsx";
import Modeswitcher from "./components/Mode-switcher.jsx";
import { useState } from "react";
import { getNewDisplay } from "./assets/calcLogic.js";
function App() {
	const [mainDisplay, setMainDisplay] = useState("0");
	const [historyDisplay, setHistoryDisplay] = useState("");
	const [roundedOffDisplay, setRoundedOffDisplay] = useState("");

	const handleClick = (label) => {
		const nextValue = getNewDisplay(mainDisplay, label);
		if (label === "=") {
			setHistoryDisplay(mainDisplay + " =");
			setMainDisplay(nextValue);
			const roundedValue = parseFloat(nextValue);
			if (
				!isNaN(roundedValue) &&
				roundedValue % 1 !== 0 &&
				roundedValue !== 0
			) {
				setRoundedOffDisplay("≈ " + roundedValue.toFixed(1));
			} else {
				setRoundedOffDisplay("");
			}
		} else {
			setMainDisplay(nextValue);
		}
		if (label === "AC") {
			setMainDisplay("0");
			setHistoryDisplay("");
			setRoundedOffDisplay("");
		}
	};

	return (
		<div className="flex flex-col bg-[#121C34] items-center justify-center w-screen h-screen">
			<Screenarea
				display1={mainDisplay}
				display2={historyDisplay}
				display3={roundedOffDisplay}
			/>
			<Modeswitcher />
			<BasicFunctions onClick={handleClick} />
		</div>
	);
}

export default App;
