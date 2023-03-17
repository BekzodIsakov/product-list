export const reducer = (state, action) => {
  switch (action.type) {
    case "fetchProducts": {
      return { ...state, products: [...action.products] };
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

    default:
      return state;
  }
};
