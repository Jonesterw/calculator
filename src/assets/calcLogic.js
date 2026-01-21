const getNewDisplay = (currentDisplay, clickedButton) => {
	if (clickedButton === "AC") {
		return "0";
	}
	if (clickedButton === "⌫") {
		if (currentDisplay === "Error 💀 💀 💀") {
			return "0";
		}
		if (currentDisplay.length === 1) {
			return "0";
		} else {
			return currentDisplay.slice(0, -1);
		}
	}
	if (clickedButton === "=") {
		try {
			let mathreadyDisplay = currentDisplay
				.replace(/÷/g, "/")
				.replace(/x/g, "*");
			return eval(mathreadyDisplay).toString();
		} catch {
			return "Error 💀 💀 💀";
		}
	}

	if (currentDisplay === "Error 💀 💀 💀") {
		if (["+", "-", "x", "÷", "."].includes(clickedButton)) {
			currentDisplay = "0";
		} else {
			return clickedButton;
		}
	}

	if (clickedButton === ".") {
		const parts = currentDisplay.split(/[+\-/*x÷]/);
		const lastPart = parts[parts.length - 1];
		if (lastPart.includes(".")) {
			return currentDisplay;
		}
	}
	if (
		currentDisplay === "0" &&
		!["+", "-", "x", "÷", "."].includes(clickedButton)
	) {
		return clickedButton;
	}
	return currentDisplay + clickedButton;
};
export { getNewDisplay };
