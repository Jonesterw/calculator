const Button = ({ label, className, onClick }) => {
	return (
		<button
			className={`hover:brightness-110 text-white font-bold py-2 px-8 w-full h-full rounded-lg ${className}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default Button;
