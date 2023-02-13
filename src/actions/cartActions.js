import APIrequest from "../utils/APIrequest";

export const loadCart = () => async (dispatch) => {
  const type = "LOAD_CART";
  await APIrequest({
    type,
    apiData: {
      method: "get",
      url: "660/cart",
    },
    meta: { loadingId: -1 },
    dispatch,
  });
};
export const addCart = (data) => async (dispatch) => {
  const type = "ADD_CART";
  await APIrequest({
    type,
    apiData: {
      method: "post",
      url: "660/cart",
      data,
    },
    meta: { loadingId: -1 },
    dispatch,
  });
};

export const updateCart = (data) => async (dispatch) => {
  console.log(data);
  const type = "UPDATE_CART";
  await APIrequest({
    apiData: {
      method: "put",
      url: `660/cart/${data.id}`,
      data,
    },
    dispatch,
    type,
    meta: { loadingId: data.productId },
  });
};
export const deleteCart = (data) => async (dispatch) => {
  console.log(data);
  const type = "DELETE_CART";
  await APIrequest({
    apiData: {
      method: "delete",
      url: `660/cart/${data.id}`,
      data,
    },
    dispatch,
    type,
    meta: { loadingId: data.productId },
  });
};
