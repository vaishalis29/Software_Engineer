export const adaptProduct = (apiProduct) => {
  return {
    id: apiProduct.productId || apiProduct.id,
    name: apiProduct.title || apiProduct.name,
    price: apiProduct.finalPrice || apiProduct.price,
    mrp: apiProduct.mrp || null,
    rating: apiProduct.rating || 0,
    reviews: apiProduct.reviews || 0,
    image: apiProduct.image,
    offers: apiProduct.offers || [],
  };
};
