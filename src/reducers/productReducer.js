export const productInitialState = [];

export const ProductReducer = (
  state = productInitialState,
  { type, payload }
) => {
  switch (type) {
    case "LOAD_PRODUCTS_SUCCESS":
      return payload;

    default:
      return state;
  }
};
