import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    toast("Donated successfully");
  } else {
    toast("Already donated");
  }
};

export { getStoredData, setData };
