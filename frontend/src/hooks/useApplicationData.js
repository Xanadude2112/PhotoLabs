import { useState, useReducer, useEffect } from "react";

const actions = {
  FAVE_PHOTO_ADDED: "FAVE_PHOTO_ADDED",
  FAVE_PHOTO_REMOVED: "FAVE_PHOTO_REMOVED",
  SELECT_PHOTO: "SELECT_PHOTO",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  TOGGLE_LIKE_MODAL: "TOGGLE_LIKE_MODAL",
  SET_PHOTOS: "SET_PHOTOS",
  SET_TOPICS: "SET_TOPICS",
};

const initialState = {
  modalOpen: false,
  likeModalOpen: false,
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
  case actions.TOGGLE_LIKE_MODAL:
    return { ...state, likeModalOpen: action.payload };
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

  //PHOTO API DB

  useEffect(() => {
    fetch(`/api/photos`) //PROXY SET UP IN FRONT END PACKAGE.JSON
      .then((response) => response.json())
      .then((data) => dispatch({ type: actions.SET_PHOTOS, payload: data }))
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  //TOPIC API DB

  useEffect(() => {
    fetch(`/api/topics`) //PROXY SET UP IN FRONT END PACKAGE.JSON
      .then((response) => response.json())
      .then((data) => dispatch({ type: actions.SET_TOPICS, payload: data }))
      .catch((error) => console.error("Error fetching topics:", error));
  }, []);


  //PHOTOLIST MODAL
  const showModal = () => {
    dispatch({ type: actions.TOGGLE_MODAL, payload: !state.modalOpen });
  };

  //LKED PHOTO MODAL
  const showLikedPhotoModal = () => {
    dispatch({ type: actions.TOGGLE_LIKE_MODAL, payload: !state.likeModalOpen })
  }

  //FAVE HEART BUTTON ANIMATIONS HANDLER
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


  //PHOTO SELECT HANDLER
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

  
  //TOPIC SELECT HANDLER
  const selectTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
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
    showLikedPhotoModal
  };
};

export default useApplicationData;
