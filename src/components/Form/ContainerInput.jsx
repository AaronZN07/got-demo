const ContainerInput = ({ alterClass, children }) => {
	return <div className={`${alterClass ? alterClass : ''}`}>{children}</div>;
};

export default ContainerInput;
