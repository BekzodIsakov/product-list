const URL = "http://localhost:2288";
export const createActions = (dispatch) => {
  return {
    fetchProducts: async () => {
      try {
        const response = await fetch(`${URL}/products`);
        const products = await response.json();
        dispatch({
          type: "fetchProducts",
          products,
        });
      } catch (err) {
        console.error(err);
      }
    },
    deleteProduct: async (id) => {
      console.log("deleting");
      try {
        const response = await fetch(`${URL}/products/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          dispatch({
            type: "delete",
            id,
          });
        }
      } catch (err) {
        console.error(err);
      }
    },
    addProduct: (name, price, category, imageSrc) => {
      dispatch({
        type: "add",
        name,
        price,
        category,
        imageSrc,
      });
    },
  };
};
