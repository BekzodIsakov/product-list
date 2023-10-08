export const createActions = (dispatch) => {
  return {
    fetchProducts: async (page, limit, filter) => {
      try {
        dispatch({
          type: "setLoading",
          loading: true,
        });

        const URL = filter
          ? `${process.env.REACT_APP_BASE_URL}/products?category=${filter}&_page=${page}&_limit=${limit}`
          : `${process.env.REACT_APP_BASE_URL}/products?&_page=${page}&_limit=${limit}`;

        const response = await fetch(URL);
        const totalCount = response.headers.get("x-total-count");
        const products = await response.json();
        dispatch({
          type: "fetch",
          products,
          totalCount,
        });
      } catch (err) {
        console.error(err);
      } finally {
        dispatch({
          type: "setLoading",
          loading: false,
        });
      }
    },
    search: async (name) => {
      try {
        // dispatch({
        //   type: "setLoading",
        //   loading: true,
        // });

        const url = `${process.env.REACT_APP_BASE_URL}/products?name=${name}`;

        const res = await fetch(url);
        // const totalCount = res.headers.get("x-total-count");
        const data = await res.json();
        dispatch({
          type: "search",
          foundProducts: data,
        });
      } catch (err) {
        console.error(err);
      }
      // finally {
      //   dispatch({
      //     type: "setLoading",
      //     loading: false,
      //   });
      // }
    },
    clearSearch: async () => {
      dispatch({
        type: "clearSearch",
      });
    },
    createProduct: async (product) => {
      console.log(product);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/products`,
          {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(product),
          }
        );
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
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/products/${product.id}`,
          {
            headers: { "Content-Type": "application/json" },
            method: "PUT",
            body: JSON.stringify(product),
          }
        );
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
    deleteProduct: async (id) => {
      console.log("deleting");
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/products/${id}`,
          {
            method: "DELETE",
          }
        );
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
  };
};
