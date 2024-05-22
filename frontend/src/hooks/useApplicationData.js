import { useState } from 'react';

const useApplicationData = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [fave, setFave] = useState([]);

  const showModal = () => {
    setModalOpen(!modalOpen);
  };

  return {
    modalOpen,
    setModalOpen,
    selectedPhoto,
    setSelectedPhoto,
    fave,
    setFave,
    showModal,
  };
};
export default useApplicationData;