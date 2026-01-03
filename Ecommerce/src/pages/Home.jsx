import { useEffect, useState, useCallback } from "react";
import { fetchProducts } from "../api/productApi";
import { adaptProduct } from "../api/productAdapter";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch products
  useEffect(() => {
  let isMounted = true;

  const loadProducts = async () => {
    try {
      const res = await fetchProducts();
      if (isMounted) {
        const adapted = res.map((p) => adaptProduct(p));
        setProducts(adapted);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  loadProducts();

  return () => {
    isMounted = false;
  };
}, []);


  // 🔹 Search handler
  const handleSearch = useCallback(({ query, results }) => {
  setSearchQuery(query);
  setSearchResults(results);
}, []);

  // 🔹 Loading skeleton
  if (loading) {
    return (
      <div className="grid">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    );
  }


return (
    <div className="home-page">   {/* 👈 ADD THIS WRAPPER */}

      <SearchBar products={products} onSearch={handleSearch} />

      {searchQuery ? (
        searchResults.length > 0 ? (
          <div className="search-center">
            {searchResults.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="no-results">No products found</p>
        )
      ) : (
        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
 </div>
  );
    

};

export default Home;
