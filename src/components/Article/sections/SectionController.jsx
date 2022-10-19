import styles from './SectionStyles.module.scss';
import SectionFull from './SectionFull';
import SectionTitleImage from './SectionTitleImage';
import SectionTitleText from './SectionTitleText';
import SectionImageText from './SectionImageText';
import SectionImage from './SectionImage';
import SectionText from './SectionText';

const generateStyles = base => {
	return {
		base: styles[base],
		title: styles.title,
		content: styles.content,
		image: styles.image,
	};
};

const SectionController = ({ style, data }) => {
	return (
		<div className={styles.section}>
			{style === 1 && (
				<SectionTitleImage
					title={data.title}
					img={data.image}
					styles={generateStyles('section_title-image')}
				/>
			)}
			{style === 2 && (
				<SectionTitleImage
					title={data.title}
					img={data.image}
					styles={generateStyles('section_title-image_right')}
				/>
			)}
			{style === 3 && (
				<SectionTitleImage
					title={data.title}
					img={data.image}
					styles={generateStyles('section_title-image_left')}
				/>
			)}
			{style === 4 && (
				<SectionFull
					title={data.title}
					content={data.content}
					img={data.image}
					styles={generateStyles('section_full-reverse')}
				/>
			)}
			{style === 5 && (
				<SectionFull
					title={data.title}
					content={data.content}
					img={data.image}
					styles={generateStyles('section_full')}
				/>
			)}
			{style === 6 && (
				<SectionFull
					title={data.title}
					content={data.content}
					img={data.image}
					styles={generateStyles('section_full-right')}
				/>
			)}
			{style === 7 && (
				<SectionFull
					title={data.title}
					content={data.content}
					img={data.image}
					styles={generateStyles('section_full-left')}
				/>
			)}
			{style === 8 && (
				<SectionTitleText
					title={data.title}
					content={data.content}
					styles={generateStyles('section_title-text')}
				/>
			)}
			{style === 9 && (
				<SectionImageText
					img={data.image}
					content={data.content}
					styles={generateStyles('section_image-text')}
				/>
			)}
			{style === 10 && (
				<SectionImage
					img={data.image}
					styles={generateStyles('section_image')}
				/>
			)}
			{style === 11 && (
				<SectionText
					content={data.content}
					styles={generateStyles('section_text')}
				/>
			)}
		</div>
	);
};

export default SectionController;
