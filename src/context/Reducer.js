export const reducer = (state, action) => {
  switch (action.type) {
    case "fetchProducts": {
      return { products: [...action.products] };
    }
    case "delete": {
      const { id } = action;
      const filteredProducts = state.products.filter(
        (product) => product.id !== id
      );

      return {
        products: filteredProducts,
      };
    }

    case "add": {
      const { name, description, price, category, imageSrc } = action;
      return [
        ...state,
        {
          id: state.length,
          name,
          description,
          price,
          category,
          imageSrc,
        },
      ];
    }
    case "update": {
      const { id, name, description, price, category, imageSrc } = action;
      return [
        ...state,
        {
          id: state.length,
          name,
          description,
          price,
          category,
          imageSrc,
        },
      ];
    }
    default:
      break;
  }
};
