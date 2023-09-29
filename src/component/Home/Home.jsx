import { useState } from "react";
import HomeCard from "../HomeCard/HomeCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [str, setStr] = useState("");
  const data = useLoaderData();
  const [searchData, setSearchData] = useState(data);
  const submitHandle = (string) => {
    const lowerStr = string.toLowerCase();
    if (lowerStr === "all") {
      setSearchData(data);
    } else {
      const searching = data.filter(
        (element) => lowerStr === element.category.toLowerCase()
      );
      setSearchData(searching);
    }
  };

  const searchHandler = (e) => {
    setStr(e.target.value);
  };
  return (
    <div>
      <div className="text-center mt-24">
        <h1 className="font-bold md:text-2xl lg:text-4xl">
          I Grow By Helping People In Need
        </h1>
        <br />
        <input
          onChange={searchHandler}
          className="md:w-96 h-11 bg-white pl-4 border-[1px]"
          type="text"
          placeholder="Search here..."
        />
        <input
          onClick={() => submitHandle(str)}
          className="bg-[#FF444A] text-white p-[11px] rounded cursor-pointer"
          type="submit"
          value="Search"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-52 p-2">
        {searchData.map((donation) => (
          <HomeCard key={donation.id} props={donation}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
