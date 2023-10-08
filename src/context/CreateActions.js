export const createProductActions = (dispatch) => {
  return {
    fetch: async (page, limit, filter) => {
      try {
        dispatch({
          type: "loading",
          loading: true,
        });

        const url = filter
          ? `${process.env.REACT_APP_BASE_URL}/products?category=${filter}&_page=${page}&_limit=${limit}`
          : `${process.env.REACT_APP_BASE_URL}/products?&_page=${page}&_limit=${limit}`;

        const res = await fetch(url);
        const totalCount = res.headers.get("x-total-count");
        const products = await res.json();
        dispatch({
          type: "fetch",
          products,
          totalCount,
        });
      } catch (error) {
        dispatch({
          type: "error",
          error,
        });
        console.error(error);
      } finally {
        dispatch({
          type: "loading",
          loading: false,
        });
      }
    },
    create: async (product) => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/products`, {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(product),
        });
        if (res.ok) {
          dispatch({
            type: "add",
            product,
          });
        }
      } catch (error) {
        dispatch({
          type: "error",
          error,
        });
        console.error(error);
      }
    },
    edit: async (product) => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BASE_URL}/products/${product.id}`,
          {
            headers: { "Content-Type": "application/json" },
            method: "PUT",
            body: JSON.stringify(product),
          }
        );
        if (res.ok) {
          dispatch({
            type: "edit",
            product,
          });
        }
      } catch (error) {
        dispatch({
          type: "error",
          error,
        });
        console.error(error);
      }
    },
    delete: async (id) => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BASE_URL}/products/${id}`,
          {
            method: "DELETE",
          }
        );
        if (res.ok) {
          dispatch({
            type: "delete",
            id,
          });
        }
      } catch (error) {
        dispatch({
          type: "error",
          error,
        });
        console.error(error);
      }
    },
  };
};
