const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={product.image} alt={product.name} />
        <span className="quick-view">Quick View</span>
      </div>

      <h3>{product.name}</h3>

      <p className="price">
        ₹{product.price}
        {product.mrp && <span className="mrp"> ₹{product.mrp}</span>}
      </p>

      <small className="rating">
        ⭐ {product.rating} ({product.reviews})
      </small>

      <div className="badges">
        {product.offers.map((o) => (
          <span key={o} className="badge">{o}</span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
