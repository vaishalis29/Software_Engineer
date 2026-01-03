import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

const SearchBar = ({ products, onSearch }) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (!debouncedQuery) {
      onSearch({ query: "", results: [] });
      return;
    }

    const results = products.filter((p) =>
      p.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    onSearch({ query: debouncedQuery, results });
  }, [debouncedQuery, products, onSearch]);

  return (
    <div className="search">
      <input
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
