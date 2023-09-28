import HomeCard from "../HomeCard/HomeCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="text-center mt-24">
        <h1 className="font-bold md:text-2xl lg:text-4xl">
          I Grow By Helping People In Need
        </h1>
        <br />
        <input
          className="md:w-96 h-11 bg-white pl-4 border-[1px]"
          type="text"
          placeholder="Search here..."
        />
        <input
          className="bg-[#FF444A] text-white p-[11px] rounded cursor-pointer"
          type="submit"
          value="Search"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-52 p-2">
        {data.map((donation) => (
          <HomeCard key={donation.id} props={donation}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
