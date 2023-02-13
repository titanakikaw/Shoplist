import APIrequest from "../utils/APIrequest";

export const loadProducts = () => async (dispatch) => {
  const type = "LOAD_PRODUCTS";
  await APIrequest({
    type,
    apiData: {
      method: "get",
      url: "660/products",
    },
    meta: { loadingId: -1 },
    dispatch,
  });
};
