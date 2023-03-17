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
    createProduct: async (product) => {
      console.log(product);
      try {
        const response = await fetch(`${URL}/products`, {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(product),
        });
        if (response.ok) {
          dispatch({
            type: "add",
            product,
          });
        }
      } catch (err) {
        console.error(err);
      }
    },
    updateProduct: async (product) => {
      try {
        const response = await fetch(`${URL}/products/${product.id}`, {
          headers: { "Content-Type": "application/json" },
          method: "PUT",
          body: JSON.stringify(product),
        });
        if (response.ok) {
          dispatch({
            type: "edit",
            product,
          });
        }
      } catch (err) {
        console.error(err);
      }
    },
  };
};
