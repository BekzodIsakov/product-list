export const reducer = (state, action) => {
  switch (action.type) {
    case "fetch": {
      return {
        ...state,
        totalCount: action.totalCount,
        products: [...action.products],
      };
    }
    case "add": {
      return {
        ...state,
        products: [...state.products, action.product],
      };
    }
    case "edit": {
      const editedProducts = state.products.map((product) => {
        if (product.id === action.product.id) {
          product = {
            ...action.product,
          };
        }

        return product;
      });

      return {
        ...state,
        products: editedProducts,
      };
    }
    case "delete": {
      const { id } = action;
      const filteredProducts = state.products.filter(
        (product) => product.id !== id
      );

      return {
        ...state,
        products: filteredProducts,
      };
    }

    case "setLoading":
      return {
        ...state,
        loading: action.loading,
      };

    default:
      return state;
  }
};
