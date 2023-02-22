const defaultState = {
    items: [],
  };
  
  const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_ITEM": {
        return { ...state, items: [...state.items, action.payload] };
      }
      case "DELETE_ITEM": {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
      }
      case "SHOW_ITEM": {
        return {...state};
      }
      default:
        return state;
    }
  };
  
  export default counterReducer;
  