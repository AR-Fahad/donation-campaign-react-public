import { getStoredData } from "../../js/localStorage";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
const Statistics = () => {
  const getLocalData = getStoredData();
  const donation = (getLocalData.length * 100) / 12;
  const totalDonation = 100 - donation;

  const data = [
    { name: "Your Donation", value: parseFloat(donation.toFixed(1)) },
    { name: "Total Donation", value: parseFloat(totalDonation.toFixed(1)) },
  ];

  console.log(data[0].value);

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <>
      <div className="">
        <PieChart width={275} height={275}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            <text fill="white" dominantBaseline="central"></text>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip></Tooltip>
          <Legend></Legend>
        </PieChart>
      </div>
    </>
  );
};

export default Statistics;
