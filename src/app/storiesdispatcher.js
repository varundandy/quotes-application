import Constants from "../constants/constant";

const storiesReducer = (state, action) => {
    switch (action.type) {
      case Constants.storiesDispatcher.INIT:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case Constants.storiesDispatcher.SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case Constants.storiesDispatcher.FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case Constants.storiesDispatcher.REMOVE:
        return {
          ...state,
          data: state.data.filter(
            story => action.payload.objectID !== story.objectID
          ),
        };
      default:
        throw new Error();
    }
  };


  export default storiesReducer;