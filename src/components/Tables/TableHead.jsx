const TableHead = ({ data }) => {
	return (
		<tr role={'row'}>
			{data.map((element, index) => (
				<th key={index}> {element} </th>
			))}
		</tr>
	);
};

export default TableHead;
