import { createContext, useState } from 'react';

const BlogFormContext = createContext();

const initialForm = {
	metadata: {
		category: {
			id: false,
			name: false,
			color: false,
		},
		tags: [],
	},
};
const initialValidate = {};

const BlogFormProvider = ({ children }) => {
	const [form, setForm] = useState(initialForm);
	const [validate, setValidate] = useState(initialValidate);
	const [save, setSave] = useState(false);
	const [section, setSection] = useState([]);

	const handleChange = (e, id, name) => {
		const value = name === 'image' ? e : e.target.value;
		const newValues = { ...form[id], [name]: value };
		setForm(values => ({ ...values, [id]: newValues }));

		if (value) {
			setSave(true);
		}
	};

	const handleValidate = (e, regex, id, name) => {
		const value = name === 'content' || name === 'image' ? e : e.target.value;
		if (name === 'image') {
			const newValues = {
				...validate[id],
				[name]: value,
			};
			setValidate(values => ({ ...values, [id]: newValues }));
			return;
		}
		if (regex) {
			const conditional = regex.test(value);
			const newValues = {
				...validate[id],
				[name]: !conditional,
			};
			setValidate(values => ({ ...values, [id]: newValues }));
		}
	};

	const handleChangeTextArea = (value, editor, id) => {
		const isAstChange = editor.operations.some(
			op => 'set_selection' && op.type
		);
		if (isAstChange) {
			const content = JSON.stringify(value);
			const newValues = { ...form[id], content };
			setForm(values => ({ ...values, [id]: newValues }));
			setSave(true);
		}
	};

	const handleRemove = id => {
		let newObjectForm = {};
		let newObjectValidate = {};
		for (const [key, value] of Object.entries(form)) {
			if (form[key].id !== id) {
				newObjectForm = { ...newObjectForm, [key]: value };
			}
		}
		for (const [key, value] of Object.entries(validate)) {
			if (validate[key].id !== id) {
				newObjectValidate = { ...newObjectValidate, [key]: value };
			}
		}
		setForm(newObjectForm);
		setValidate(newObjectValidate);
	};

	const handleNewSection = (
		id,
		style,
		entry = {
			title: false,
			content: false,
			image: false,
		}
	) => {
		const structure = { id, ...entry, style };

		if (form[id]) {
			let formWithValues = {};
			for (const prop in entry) {
				formWithValues = { ...formWithValues, [prop]: form[id][prop] || false };
			}
			const newStructureData = { id, ...formWithValues, style };

			setForm(values => ({ ...values, [id]: newStructureData }));
			setValidate(values => ({ ...values, [id]: structure }));

			return;
		}
		setForm(values => ({ ...values, [id]: structure }));
		setValidate(values => ({ ...values, [id]: structure }));
	};

	const handleSave = () => setSave(false);

	const handleMetadata = (isCategory, value) => {
		let newValues;
		if (isCategory) {
			newValues = { ...form.metadata, category: value };
		} else {
			newValues = { ...form.metadata, tags: value };
		}

		setForm(values => ({ ...values, metadata: newValues }));
	};

	const handleNewForm = () => {
		setForm(initialForm);
		setSection([]);
	};

	const data = {
		form,
		handleChange,
		validate,
		handleValidate,
		handleChangeTextArea,
		handleRemove,
		handleNewSection,
		handleMetadata,
		save,
		handleSave,
		setForm,
		section,
		setSection,
		handleNewForm,
	};

	return (
		<BlogFormContext.Provider value={data}>{children}</BlogFormContext.Provider>
	);
};

export { BlogFormProvider as BlogProvider };
export default BlogFormContext;
