import { getStoredData } from "../../js/localStorage";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const getLocalData = getStoredData();

  return (
    <div>
      <h1>This is Statistics</h1>
    </div>
  );
};

export default Statistics;
