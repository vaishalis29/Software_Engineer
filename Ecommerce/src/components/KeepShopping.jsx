import { getSearchHistory } from "../utils/storage";

const KeepShopping = () => {
  const items = getSearchHistory();

  if (!items.length) return null;

  return (
    <>
      <h2>Keep Shopping</h2>
      <div className="grid">
        {items.map((p) => (
          <div key={p.id} className="card small">
            {p.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default KeepShopping;
