import {FC} from "react";
import {clsx} from "clsx";

export interface MoneyProps {
  amount: number;
  type: "INCOME" | "OUTCOME";
}

export const Money: FC<MoneyProps> = ({amount, type}) => {
  const sign = type === "OUTCOME" ? "-" : "+";
  return (
    <span
      className={clsx("ml-auto font-medium", {
        "text-green-500": type === "INCOME",
        "text-red-500": type === "OUTCOME",
      })}
    >
      {sign}
      {amount}
    </span>
  );
};
