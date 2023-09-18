import allProducts from "./mock-data";

export const getAllProducts = () => {
  return allProducts;
};

export const getProductById = (id: number) => {
  return allProducts.find((product) => product.id === id);
};

export const createProduct = (product: Record<string, unknown>) => {
  allProducts.push({
    id: allProducts.length,
    ...product,
  });
  return true;
};

export const updateProduct = (
  id: number,
  updatedProduct: Record<string, unknown>
) => {
  const index = allProducts.findIndex((product) => product.id === id);

  if (index !== -1) {
    allProducts[index] = { ...allProducts[index], ...updatedProduct };
    return true;
  }

  return false;
};

export const deleteProduct = (id: number) => {
  const index = allProducts.findIndex((product) => product.id === id);

  if (index !== -1) {
    allProducts.splice(index, 1);
    return true;
  } else {
    return false;
  }
};

export const paginateProducts = (items: number, currentPage: number) => {
  const result = allProducts.slice(
    (currentPage - 1) * items,
    currentPage * items
  );
  const totalPages = Math.ceil(allProducts.length / items);

  return {
    result,
    totalPages,
  };
};
