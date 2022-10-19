import styles from './FavoriteButton.module.scss';

const FavoriteButton = ({ content, id = 'favorite' }) => {
	return (
		<div className={styles['like-button']}>
			<input type='checkbox' id={id} />
			<label htmlFor={id}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='icon icon-tabler icon-tabler-heart'
					width='28'
					height='28'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='#000000'
					fill='none'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
				</svg>
				<span> {content} </span>
			</label>
		</div>
	);
};

export default FavoriteButton;
