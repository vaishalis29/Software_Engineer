export const fetchProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          productId: 1,
          title: "Wireless Headphones",
          finalPrice: 2499,
          mrp: 3999,
          rating: 4.5,
          reviews: 1200,
          image: "https://clearbuy-cloud.nyc3.digitaloceanspaces.com/media/11650/Bose-QuietComfort-Ultra-Headphones-%282nd-Gen%29-vanity.jpg",
          offers: ["Best Seller"],
        },
        {
          productId: 2,
          title: "Smart Watch",
          finalPrice: 1999,
          mrp: 2999,
          rating: 4.2,
          reviews: 860,
          image: "https://ddfndelma2gpn.cloudfront.net/color/1591/oraimo_watch_5_black_1.webp",
          offers: ["Limited Deal"],
        },
         {
          productId: 3,
          title: "Bluetooth Speaker",
          finalPrice: 1499,
          mrp: 2499,
          rating: 4.4,
          reviews: 640,
          image: "https://www.boat-lifestyle.com/cdn/shop/products/e57bbbe7-5e99-4c43-8cf8-0ddd42caf3d3.png?v=1633518105",
          offers: ["Top Rated"],
        },
        {
          productId: 4,
          title: "DSLR Camera",
          finalPrice: 45999,
          mrp: 52999,
          rating: 4.6,
          reviews: 430,
          image: "https://utgadgets.com/cdn/shop/files/Canon_400D_DSLR_Camera_with_28-80mm_lens_-_Best_Price_in_Pakistan_3264x.jpg?v=1737635269",
          offers: ["Hot Deal"],
        },
        {
          productId: 5,
          title: "Gaming Mouse",
          finalPrice: 1299,
          mrp: 1999,
          rating: 4.3,
          reviews: 980,
          image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/261704_0_hogjxi.png",
          offers: ["Best Value"],
        },
        
      ]);
    }, 1000);
  });
};
