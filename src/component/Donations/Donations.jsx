import { useEffect, useState } from "react";
import { getStoredData } from "../../js/localStorage";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Donations = () => {
  const allData = useLoaderData();
  const [dataApplied, setDataApplied] = useState([]);
  useEffect(() => {
    const getLocalData = getStoredData();
    const appliedData = allData.filter((donation) =>
      getLocalData.includes(donation.id)
    );
    setDataApplied(appliedData);
  }, [allData]);
  const [arrayLength, setArrayLength] = useState(4);

  return (
    <>
      <Helmet>
        <title>Donation Campaign | Donation</title>
      </Helmet>
      <div className="grid lg:grid-cols-2 gap-6 p-3">
        {dataApplied.length <= 4
          ? dataApplied.map((donation) => {
              return (
                <>
                  <div
                    style={{ backgroundColor: donation.card }}
                    className="flex flex-col md:flex-row rounded"
                  >
                    <img
                      src={donation.img}
                      className="w-[100%] md:w-[50%] shadow-2xl"
                    />
                    <div className="p-6">
                      <button
                        style={{
                          color: donation.text,
                          backgroundColor: donation.category_bg,
                        }}
                        className="w-[74px] h-5 rounded text-xs"
                      >
                        {donation.category}
                      </button>
                      <h1 className="text-2xl font-semibold">
                        {donation.title}
                      </h1>
                      <p
                        style={{ color: donation.text }}
                        className="font-semibold"
                      >
                        {donation.price}
                      </p>
                      <Link to={`/donation/${donation.id}`}>
                        <button
                          style={{ backgroundColor: donation.text }}
                          className="btn btn-sm text-white border-none mt-6"
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })
          : dataApplied.slice(0, arrayLength).map((donation) => {
              return (
                <>
                  <div
                    style={{ backgroundColor: donation.card }}
                    className="flex flex-col md:flex-row rounded"
                  >
                    <img
                      src={donation.img}
                      className="w-[100%] md:w-[50%] shadow-2xl"
                    />
                    <div className="p-6">
                      <button
                        style={{
                          color: donation.text,
                          backgroundColor: donation.category_bg,
                        }}
                        className="w-[74px] h-5 rounded text-xs"
                      >
                        {donation.category}
                      </button>
                      <h1 className="text-2xl font-semibold">
                        {donation.title}
                      </h1>
                      <p
                        style={{ color: donation.text }}
                        className="font-semibold"
                      >
                        {donation.price}
                      </p>
                      <Link to={`/donation/${donation.id}`}>
                        <button
                          style={{ backgroundColor: donation.text }}
                          className="btn btn-sm text-white border-none mt-6"
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
      </div>
      <div className="text-center pb-4">
        <button
          onClick={() => {
            setArrayLength(dataApplied.length);
          }}
          className={
            arrayLength === dataApplied.length || dataApplied.length <= 4
              ? "hidden"
              : "bg-green-600 text-white btn btn-sm border-none"
          }
        >
          See All
        </button>
      </div>
    </>
  );
};

export default Donations;
