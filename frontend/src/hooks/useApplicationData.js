import { useState, useReducer, useEffect } from "react";

const actions = {
  FAVE_PHOTO_ADDED: "FAVE_PHOTO_ADDED",
  FAVE_PHOTO_REMOVED: "FAVE_PHOTO_REMOVED",
  SELECT_PHOTO: "SELECT_PHOTO",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_PHOTOS: "SET_PHOTOS",
  SET_TOPICS: "SET_TOPICS",
};

const initialState = {
  modalOpen: false,
  selectedPhoto: {},
  fave: [],
  photos: [],
  topics: [],
};

const reducer = (state, action) => {
  switch (action.type) {
  case actions.FAVE_PHOTO_ADDED:
    return { ...state, fave: state.fave.concat(action.payload) };
  case actions.FAVE_PHOTO_REMOVED:
    return { ...state, fave: action.payload };
  case actions.TOGGLE_MODAL:
    return { ...state, modalOpen: action.payload };
  case actions.SELECT_PHOTO:
    return { ...state, selectedPhoto: action.payload };
  case actions.SET_PHOTOS:
    return { ...state, photos: action.payload };
  case actions.SET_TOPICS:
    return { ...state, topics: action.payload };
  default:
    throw new Error("NO ACTION FOUND");
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`/api/photos`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: actions.SET_PHOTOS, payload: data }))
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  useEffect(() => {
    fetch(`/api/topics`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: actions.SET_TOPICS, payload: data }))
      .catch((error) => console.error("Error fetching topics:", error));
  }, []);

  const showModal = () => {
    dispatch({ type: actions.TOGGLE_MODAL, payload: !state.modalOpen });
  };

  const toggleFave = (id) => {
    if (state.fave.includes(id)) {
      dispatch({
        type: actions.FAVE_PHOTO_REMOVED,
        payload: state.fave.filter((faveId) => faveId !== id),
      });
    } else {
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
      type: actions.SELECT_PHOTO,
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
  
  const selectTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: actions.SET_PHOTOS, payload: data }))
      .catch((error) => console.error("Error fetching photos by topic:", error));
  };

  return {
    state,
    selectTopic,
    toggleFave,
    setSelectedPhoto,
    showModal,
  };
};

export default useApplicationData;
