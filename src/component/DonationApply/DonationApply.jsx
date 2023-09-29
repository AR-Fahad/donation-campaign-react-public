import { useLoaderData, useParams } from "react-router-dom";

const DonationApply = () => {
  const data = useLoaderData();
  const { Id } = useParams();
  const numId = parseInt(Id);
  // #0B0B0B7F
  const findData = data.find((donation) => donation.id === numId);
  return (
    <div className="px-3 py-10">
      <div>
        <img src={findData.img} className="w-full" alt="" />
      </div>
      <div className="p-9 relative -top-[120px] bg-[#0B0B0B7F]">
        <button
          style={{ backgroundColor: findData.text }}
          className="btn btn-md text-white border-none rounded"
        >
          Donate {findData.price}
        </button>
      </div>
      <div className="-mt-12">
        <h3 className="text-4xl font-bold">{findData.title}</h3>
        <br />
        <p>{findData.description}</p>
      </div>
    </div>
  );
};

export default DonationApply;
