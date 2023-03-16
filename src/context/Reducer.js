export const reducer = (state, action) => {
  switch (action.type) {
    case "fetchProducts": {
      return { products: [...action.products] };
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
    case "delete": {
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
    default:
      break;
  }
};
