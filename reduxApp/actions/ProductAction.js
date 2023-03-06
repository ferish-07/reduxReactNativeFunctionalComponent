import { GET_PRODUCT_LIST } from "./Types";

export const addProduct = (products) => {
  console.log("ajkdbfkjsbdfbsdfbsdbfbsdfj", products);
  return {
    type: GET_PRODUCT_LIST,
    products,
  };
};
