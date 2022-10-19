import styles from './Services.module.scss';

const ServiceContent = ({ title, content, transition }) => {
	return (
		<div className={`${styles.services_content}`} style={transition}>
			<h5> {title} </h5>
			<p> {content.props.children} </p>
		</div>
	);
};

export default ServiceContent;
