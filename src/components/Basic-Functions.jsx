import Button from "./Button.jsx";

const BasicFunctionsButtons = ({ onClick }) => {
	return (
		<div className="grid grid-cols-4 grid-rows-5 gap-2.5 p-5.25 w-220 h-120 bg-[#1e2533] rounded-b-lg border-t border-[#374151]">
			<Button
				label="AC"
				className={"col-span-2 bg-[#DC2626]"}
				onClick={() => onClick("AC")}
			/>
			<Button
				label={"⌫"}
				className={"bg-[#374151]"}
				onClick={() => onClick("⌫")}
			/>
			<Button
				label="÷"
				className={"bg-blue-600"}
				onClick={() => onClick("÷")}
			/>
			<Button
				label="1"
				className={"bg-[#374151]"}
				onClick={() => onClick("1")}
			/>
			<Button
				label="2"
				className={"bg-[#374151]"}
				onClick={() => onClick("2")}
			/>
			<Button
				label="3"
				className={"bg-[#374151]"}
				onClick={() => onClick("3")}
			/>
			<Button
				label="x"
				className={"bg-blue-600"}
				onClick={() => onClick("x")}
			/>
			<Button
				label="4"
				className={"bg-[#374151]"}
				onClick={() => onClick("4")}
			/>
			<Button
				label="5"
				className={"bg-[#374151]"}
				onClick={() => onClick("5")}
			/>
			<Button
				label="6"
				className={"bg-[#374151]"}
				onClick={() => onClick("6")}
			/>
			<Button
				label="-"
				className={"bg-blue-600"}
				onClick={() => onClick("-")}
			/>
			<Button
				label="7"
				className={"bg-[#374151]"}
				onClick={() => onClick("7")}
			/>
			<Button
				label="8"
				className={"bg-[#374151]"}
				onClick={() => onClick("8")}
			/>
			<Button
				label="9"
				className={"bg-[#374151]"}
				onClick={() => onClick("9")}
			/>
			<Button
				label="+ "
				className={"bg-blue-600"}
				onClick={() => onClick("+")}
			/>
			<Button
				label="0"
				className={"col-span-2 bg-[#374151]"}
				onClick={() => onClick("0")}
			/>
			<Button
				label="."
				className={"bg-[#374151]"}
				onClick={() => onClick(".")}
			/>
			<Button
				label="="
				className={"bg-[#16A34A]"}
				onClick={() => onClick("=")}
			/>
		</div>
	);
};
export default BasicFunctionsButtons;
