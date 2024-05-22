import { useState, useReducer } from "react";

const actions = {
  FAVE_PHOTO_ADDED: "FAVE_PHOTO_ADDED",
  FAVE_PHOTO_REMOVED: "FAVE_PHOTO_REMOVED",
  SELECT_PHOTO: "SELECT_PHOTO",
  TOGGLE_MODAL: "TOGGLE_MODAL",
};

const initialState = {
  modalOpen: false,
  selectedPhoto: {},
  fave: [],
};

const reducer = (state, action) => {
  switch (
    action.type //comparing action.type to all of the constants in action object
  ) {
  case actions.FAVE_PHOTO_ADDED:
    return { ...state, fave: state.fave.concat(action.payload) };
  case actions.FAVE_PHOTO_REMOVED:
    return { ...state, fave: action.payload };
  case actions.TOGGLE_MODAL:
    return { ...state, modalOpen: action.payload };
  case actions.SELECT_PHOTO:
    return { ...state, selectedPhoto: action.payload };
  }
};

const useApplicationData = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState({});
  // const [fave, setFave] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const showModal = () => {
    // setModalOpen((prevModalOpen) => !prevModalOpen);
    dispatch({ type: actions.TOGGLE_MODAL, payload: !state.modalOpen });
  };

  const toggleFave = (id) => {
    if (state.fave.includes(id)) {
      // setFave(fave.filter((faveId) => faveId !== id)); //take fave and filter out any id that is not given id
      dispatch({
        type: actions.FAVE_PHOTO_REMOVED,
        payload: state.fave.filter((faveId) => faveId !== id),
      });
    } else {
      // setFave(fave.concat(id)); //use .concat instead of .push to change the copy not the original
      dispatch({ type: actions.FAVE_PHOTO_ADDED, payload: id });
    }
  };

  const setSelectedPhoto = ({ photo }) => {
    const {
      id,
      urls: { full },
      user: { name, profile },
      location: { city, country },
    } = photo;
    dispatch({
      type: actions.SET_PHOTO_DATA,
      payload: {
        photo: {
          id,
          urls: { full },
          user: { name, profile },
          location: { city, country },
        },
      },
    });
  };

  return {
    state,
    toggleFave,
    setSelectedPhoto,
    showModal,
  };
};
export default useApplicationData;
