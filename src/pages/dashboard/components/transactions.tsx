import {FC} from "react";
import {format} from "date-fns";
import {Money} from "@/pages/dashboard/components/money.tsx";

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
