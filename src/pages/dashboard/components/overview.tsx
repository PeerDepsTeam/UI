import {FC, useMemo} from "react";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from "recharts";

export interface OverviewProps {
  transactions: Array<{
    label: string;
    createDatetime: Date;
    type: "INCOME" | "OUTCOME";
    amount: number;
  }>;
}

const formatData = (data: OverviewProps["transactions"]) => {
  return data.map((record) => ({
    ...record,
    amount: record.type === "OUTCOME" ? -record.amount : record.amount,
  }));
};

export const Overview: FC<OverviewProps> = ({transactions}) => {
  const data = useMemo(() => formatData(transactions), [transactions]);
  return (
    <LineChart width={600} height={450} data={data}>
      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      <Line type="monotone" dataKey="type" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis dataKey="amount" />
      <Tooltip />
    </LineChart>
  );
};
