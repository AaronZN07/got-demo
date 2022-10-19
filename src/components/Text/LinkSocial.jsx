import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkSocial = ({ to, icon }) => {
	return (
		<a href={to} target='_blank' rel='noopener noreferrer'>
			<FontAwesomeIcon icon={icon} size='2x' />
		</a>
	);
};

export default LinkSocial;
