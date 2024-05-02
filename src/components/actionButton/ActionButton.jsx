const ActionButton = ({label, className, onClick}) => {
	return(
		<>
			<button className={className} onClick={onClick} >{label}</button>
		</>
		
	)
};


export default ActionButton;