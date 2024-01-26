import {FC, useMemo} from "react";
import {format} from "date-fns";
import {Money} from "@/pages/dashboard/components/money.tsx";
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

export interface TransactionsProps {
  transactions: Array<{
    label: string;
    createDatetime: Date;
    type: "INCOME" | "OUTCOME";
    amount: number;
  }>;
}

export const Transactions: FC<TransactionsProps> = ({transactions = []}) => {
  return (
    <div className="h-[35rem] space-y-8 overflow-y-auto">
      {transactions.map(({label, createDatetime, type, amount}) => {
        return (
          <div
            className="flex cursor-pointer items-center justify-between space-x-2 border border-gray-100 p-3 hover:bg-gray-50"
            key={`${label}-${createDatetime.toLocaleDateString()}`}
          >
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{label}</p>
              <p className="text-sm text-muted-foreground">
                {format(createDatetime, "LLL dd, y")}
              </p>
            </div>
            <Money amount={amount} type={type} />
          </div>
        );
      })}
    </div>
  );
};

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
