import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

const getField = (endpoint) => {
  let field = "";
  if (endpoint.includes("/")) {
    return endpoint.split("/")[0];
  }
  return endpoint;
};



export const getAll = (endpoint) => {
  return async (dispatch, getState) => {
    const res = await fetchConToken(endpoint, {}, "GET");
    const content = await res.json();
    const { items } = getState();

    const field = getField(endpoint);

    dispatch({
      type: types.getAll,
      payload: content.result,
      currentState: items,
      field: field,
    });
  };
};

export const create = (endpoint, body) => {
  return async (dispatch, getState) => {
    const res = await fetchConToken(endpoint, body, "POST");
    const content = await res.json();
    const { items } = getState();
    const field = getField(endpoint);
    //dispatch(getAll(endpoint))
    dispatch({
      type: types.create,
      payload: content.result,
      currentState: items,
      field: field,
    });
  };
};

export const update = (endpoint, body) => {
  return async (dispatch, getState) => {
    const res = await fetchConToken(endpoint, body, "PUT");
    const content = await res.json();

    const { items } = getState();
    //dispatch(getAll(endpoint))
    const field = getField(endpoint);
    dispatch({
      type: types.update,
      payload: content.result,
      currentState: items,
      field: field,
    });
  };
};

export const remove = (endpoint, body) => {
  return async (dispatch, getState) => {
    const res = await fetchConToken(endpoint, {}, "DELETE");
    const content = await res.json();
    console.log(content);
    const { items } = getState();
    console.log("del"+content)
    const field = getField(endpoint);
    dispatch({
      type: types.delete,
      payload: content.result,
      currentState: items,
      field: field,
    });
  };
};
