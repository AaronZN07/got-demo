const LinkComponent = ({ style, att, element, children }) => {
	return (
		<div>
			<a href={element.href} style={style} {...att}>
				{children}
			</a>
		</div>
	);
};

export default LinkComponent;
