export const addItemAction = (payload) => {
  return {
      type: "ADD_ITEM",
      payload
  }
}

export const deleteItemAction = (payload) => {
  return {
    type: "DELETE_ITEM",
    payload
  }
}

export const showItemAction = (payload) => {
  return {
    type: "SHOW_ITEM",
    payload
  }
}

export const showItemActionMessage = (item) => {
  return (dispatch) => {
    dispatch(showItemAction(item));
  }
}