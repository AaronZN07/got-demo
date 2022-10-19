import { useContext, useEffect, useState } from 'react';
import ArticleContent from '../Article/ArticleContent';
import BlogFormContext from '../../context/BlogFormContext';
import styles from './ArticleForm.module.scss';

const ArticlePreview = () => {
	const { form } = useContext(BlogFormContext);

	let initialData = {
		metadata: {
			category: {
				name: '',
				color: '',
			},
			tags: [],
		},
		header: {
			title: '',
			image: '',
			timestamp: Date.now(),
		},
		body: {
			principal: {
				title: form.Principal?.title,
				content: form.Principal?.content,
			},
		},
		author: {
			author: '',
			avatar: '',
		},
		preview: true,
	};

	const [data, setData] = useState(initialData);

	useEffect(() => {
		const sections = [];

		for (const key in form) {
			if (Object.hasOwnProperty.call(form, key)) {
				const element = form[key];
				if (element.id === 'Principal' || element.id === 'Information') break;
				sections.push(element);
			}
		}

		initialData = {
			metadata: {
				category: {
					id: form.metadata.category?.id,
					name: form.metadata.category?.name,
					color: form.metadata.category?.color,
				},
				tags: form.metadata?.tags.map(element => element.tag),
			},
			header: {
				title: form.Information?.title,
				image: form.Information?.image,
				timestamp: Date.now(),
			},
			body: {
				principal: {
					id: form.Principal?.id,
					title: form.Principal?.title,
					content: form.Principal?.content,
					image: form.Principal?.image,
					style: form.Principal?.style,
				},
				...sections,
			},
			author: {
				author: '',
				avatar: '',
			},
			preview: true,
		};

		setData(initialData);
	}, [form]);

	return (
		<div className={styles.article_preview}>
			<h2 className='text-center'>Vista Previa</h2>
			<div className={styles.preview}>
				<ArticleContent data={data} relativePost={false} social={false} />
			</div>
		</div>
	);
};

export default ArticlePreview;
