export const saveSearch = (item) => {
  const prev = JSON.parse(localStorage.getItem("keepShopping")) || [];
  const updated = [item, ...prev.filter((i) => i.id !== item.id)];
  localStorage.setItem("keepShopping", JSON.stringify(updated.slice(0, 5)));
};

export const getSearchHistory = () => {
  return JSON.parse(localStorage.getItem("keepShopping")) || [];
};
