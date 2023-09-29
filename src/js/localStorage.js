const getStoredData = () => {
  const data = localStorage.getItem("donations");
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

const setData = (id) => {
  const getData = getStoredData();
  if (!getData.includes(id)) {
    getData.push(id);
    localStorage.setItem("donations", JSON.stringify(getData));
  }
};

export { getStoredData, setData };
