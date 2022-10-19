import styles from './ArticleComponent.module.scss';
import ArticleContent from './ArticleContent';
import ArticleProgressNav from './ArticleProgressNav';
import { useRef } from 'react';
import Image from '../../assets/img/gallery/cat.jpg';
import DefaultImage from '../../assets/img/image.jpg';

const ArticleComponent = ({ id }) => {
	const referenceBlog = useRef(null);
	const data = {
		metadata: {
			category: {
				name: 'Cuidado de un perro',
				color: '#1C3',
			},
			tags: ['Etiqueta1', 'Etiqueta2', 'Etiqueta3'],
		},
		header: {
			title: 'Cuales son los cuidados de un perro',
			image: Image,
			timestamp: '2022-08-22 21:15:00',
		},
		body: {
			principal: {
				id: 'Principal',
				style: 5,
				title: 'Cuidados que deben de tener un perro',
				content:
					'[{"type":"h1","children":[{"text":"Cuidado básico de un perro:","bold":true}],"align":"center"},{"type":"ol","children":[{"type":"li","children":[{"bold":true,"text":"Bañar"}]},{"type":"li","children":[{"bold":true,"text":"Limpiar"}]},{"type":"li","children":[{"bold":true,"text":"Lo que sea"}]}]}]',
			},
			1: {
				style: 1,
				title: 'Sección Número 1',
				content:
					'[{"type":"h1","children":[{"text":"Sección 1:","bold":true}],"align":"center"},{"type":"ol","children":[{"type":"li","children":[{"bold":true,"text":"Bañar"}]},{"type":"li","children":[{"bold":true,"text":"Limpiar"}]},{"type":"li","children":[{"bold":true,"text":"Lo que sea"}]}]}]',
			},
		},
		author: {
			avatar: DefaultImage,
			author: 'Autor',
		},
	};

	return (
		<div className={styles.article} ref={referenceBlog}>
			<ArticleProgressNav referenceBlog={referenceBlog} />

			<ArticleContent data={data} />
		</div>
	);
};

export default ArticleComponent;
