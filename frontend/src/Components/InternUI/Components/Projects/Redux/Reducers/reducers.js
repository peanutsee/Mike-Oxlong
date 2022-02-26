import {
    RETRIEVE_PROJECTS_REQUEST,
    RETRIEVE_PROJECTS_SUCCESS,
    RETRIEVE_PROJECTS_ERROR,
    RETRIEVE_PROJECTS_RESET,
  
    APPLY_PROJECTS_REQUEST,
    APPLY_PROJECTS_SUCCESS,
    APPLY_PROJECTS_ERROR,
    APPLY_PROJECTS_RESET,
  } from "../Constants/constants";
  
  const projectInitialState = { projects: [] };
  
  export const retrieveProjectsReducer = (state = projectInitialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case RETRIEVE_PROJECTS_REQUEST:
        return { ...projectInitialState, loading: true, succuss: false };
      case RETRIEVE_PROJECTS_SUCCESS:
        return {
          ...projectInitialState,
          loading: false,
          succuss: true,
          projects: payload,
        };
      case RETRIEVE_PROJECTS_ERROR:
        return {
          ...projectInitialState,
          loading: false,
          succuss: true,
          error: payload,
        };
      case RETRIEVE_PROJECTS_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const applyProjectsReducer = (state = projectInitialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case APPLY_PROJECTS_REQUEST:
        return { ...projectInitialState, loading: true, success: false };
      case APPLY_PROJECTS_SUCCESS:
        return {
          ...projectInitialState,
          loading: false,
          succuss: true,
          projects: payload,
        };
      case APPLY_PROJECTS_ERROR:
        return {
          ...projectInitialState,
          loading: false,
          succuss: true,
          error: payload,
        };
      case APPLY_PROJECTS_RESET:
        return {};
      default:
        return state;
    }
  };