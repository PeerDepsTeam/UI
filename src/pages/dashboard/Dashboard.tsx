import {FC} from "react";
import {Layout} from "@/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import {
  Transactions,
  Overview,
} from "@/pages/dashboard/components/transactions.tsx";

// TODO: data fetching
export const Dashboard: FC = () => {
  return (
    <Layout>
      <div className="mb-2 flex-1 space-y-4 p-8 pt-6 mb-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">View date</div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className=" bg-[#EF4040]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">
                Initial capital
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$45,231.89</div>
            </CardContent>
          </Card>

          <Card className="bg-[#33BBC5]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Current Capital</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$45,231.89</div>
            </CardContent>
          </Card>

          <Card className="bg-[#A084E8]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Savings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$45,231.89</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <Overview
                transactions={[
                  {
                    label: "Buy t0",
                    createDatetime: new Date(),
                    type: "INCOME",
                    amount: 500,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 100,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 100,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 100,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 900,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 300,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 20,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 100,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 600,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 700,
                  },
                ]}
              />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Transactions</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <Transactions
                transactions={[
                  {
                    label: "Buy t0",
                    createDatetime: new Date(),
                    type: "INCOME",
                    amount: 500,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 100,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 100,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 100,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 900,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 300,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 20,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 100,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 600,
                  },
                  {
                    label: "Buy t1",
                    createDatetime: new Date(),
                    type: "OUTCOME",
                    amount: 700,
                  },
                ]}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
