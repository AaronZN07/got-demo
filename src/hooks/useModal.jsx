import { useState } from 'react';

export const useModal = (initialValue = false) => {
	const [isOpen, setIsOpen] = useState(initialValue);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	return [isOpen, handleOpen, handleClose];
};
