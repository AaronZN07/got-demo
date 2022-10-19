import { useContext, useState } from 'react';
import BlogFormContext from '../../context/BlogFormContext';
import useCallbackPrompt from '../../hooks/useCallbackPrompt';
import { useModal } from '../../hooks/useModal';
import SimpleButton from '../Buttons/SimpleButton';
import Tab from '../Tab/Tab';
import ArticleMetadata from './ArticleMetadata';
import ArticleForm from './ArticleForm';
import ArticlePreview from './ArticlePreview';
import ExitModal from './modal/ExitModal';
import LoadModal from './modal/LoadModal';
import SaveModal from './modal/SaveModal';
import styles from './ArticleForm.module.scss';
import ConfirmModal from './modal/ConfirmModal';

const ArticleCreatePanel = () => {
	const [isOpenSave, handleOpenSave, handleCloseSave] = useModal(false);
	const [isOpenLoad, handleOpenLoad, handleCloseLoad] = useModal(false);
	const [isOpenNew, handleOpenNew, handleCloseNew] = useModal(false);

	const [name, setName] = useState('');
	const {
		save,
		handleSave,
		form,
		setForm,
		section,
		setSection,
		handleNewForm,
	} = useContext(BlogFormContext);
	const [showPrompt, confirmNavigation, cancelNavigation] =
		useCallbackPrompt(save);

	return (
		<>
			<ConfirmModal
				isOpen={isOpenNew}
				handleClose={handleCloseNew}
				handleNewForm={handleNewForm}
			/>
			<LoadModal
				isOpen={isOpenLoad}
				handleClose={handleCloseLoad}
				setForm={setForm}
				setSection={setSection}
				setName={setName}
			/>
			<SaveModal
				isOpen={isOpenSave}
				handleClose={handleCloseSave}
				form={form}
				handleSaveForm={handleSave}
				section={section}
				name={name}
				setName={setName}
				save={save}
			/>
			<ExitModal
				showModal={showPrompt}
				confirmNavigation={confirmNavigation}
				cancelNavigation={cancelNavigation}
			/>
			<div className={'flex gap-5 flex-wrap'}>
				<SimpleButton
					content={'Nuevo'}
					isButton={true}
					onClick={handleOpenNew}
				/>
				<SimpleButton
					content={'Cargar'}
					isButton={true}
					onClick={handleOpenLoad}
				/>
				<SimpleButton
					content={'Guadar'}
					isButton={true}
					onClick={() => save && handleOpenSave(true)}
					customStyle={save ? styles.buttonUnsave : styles.buttonSave}
				/>
			</div>
			<Tab
				tabs={[
					{ name: 'Formulario', id: 'formulario' },
					{ name: 'Categoria y Etiquetas', id: 'categoria_y_etiquetas' },
					{ name: 'Vista Previa', id: 'vista_previa' },
				]}
			>
				<ArticleForm label={'formulario'} />
				<ArticleMetadata label={'categoria_y_etiquetas'} />
				<ArticlePreview label={'vista_previa'} />
			</Tab>
		</>
	);
};

export default ArticleCreatePanel;
