const BASE_URL = "https://my-json-server.typicode.com/BekzodIsakov/db-json";
export const createActions = (dispatch) => {
  return {
    fetchProducts: async (page, limit, filter) => {
      try {
        const URL = filter
          ? `${BASE_URL}/products?category=${filter}&_page=${page}&_limit=${limit}`
          : `${BASE_URL}/products?&_page=${page}&_limit=${limit}`;

        const response = await fetch(URL);
        const totalCount = response.headers.get("x-total-count");
        const products = await response.json();
        dispatch({
          type: "fetchProducts",
          products,
          totalCount,
        });
      } catch (err) {
        console.error(err);
      }
    },
    deleteProduct: async (id) => {
      console.log("deleting");
      try {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
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
        const response = await fetch(`${BASE_URL}/products`, {
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
        const response = await fetch(`${BASE_URL}/products/${product.id}`, {
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
