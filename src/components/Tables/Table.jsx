import TableHead from './TableHead';

const Table = ({ dataHead, styleTable, children, footer }) => {
	return (
		<table className={`${styleTable ? styleTable : undefined}`}>
			<thead role={'rowgroup'}>
				<TableHead data={dataHead} />
			</thead>

			<tbody role={'rowgroup'}>{children}</tbody>
			{footer ? <tfoot>{footer}</tfoot> : ''}
		</table>
	);
};

export default Table;
