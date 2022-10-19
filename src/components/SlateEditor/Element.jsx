import LinkComponent from './LinkComponent';

const Element = ({ att, children, element }) => {
	const style = { textAlign: element.align };

	switch (element.type) {
		case 'h1':
			return (
				<h1 style={style} {...att}>
					{children}
				</h1>
			);

		case 'h2':
			return (
				<h2 style={style} {...att}>
					{children}
				</h2>
			);

		case 'h3':
			return (
				<h3 style={style} {...att}>
					{children}
				</h3>
			);

		case 'ol':
			return (
				<ol style={style} {...att} className={'font-normal list-decimal pl-5'}>
					{children}
				</ol>
			);
		case 'ul':
			return (
				<ol style={style} {...att} className={'font-normal list-disc pl-5'}>
					{children}
				</ol>
			);
		case 'li':
			return (
				<li style={style} {...att}>
					{children}
				</li>
			);

		case 'link':
			return (
				<LinkComponent att={att} element={element} style={style}>
					{children}
				</LinkComponent>
			);
		default:
			return (
				<p style={style} {...att}>
					{children}
				</p>
			);
	}
};

export default Element;
