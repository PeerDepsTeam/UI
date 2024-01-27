import {FC, useEffect, useState} from "react";
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
import {useAuthStore} from "@/useAuthStore.ts";
import {UserProvider} from "@/services/api";
import {Transaction} from "@/services/api/gen";

const TRANSACTIONS = [
  {
    id: "1",
    user: {
      userId: "31283-afa9-4923-9181-d81ec72f4de2",
      userName: "John Doe",
      userEmail: "john.doe@example.com",
    },
    amount: "724.97",
    creationDatetime: "2024-01-26T14:23:11.812Z",
    type: "OUTCOME",
  },
  {
    id: "2",
    user: {
      userId: "5d6e-9c1b-4e89-86fe-92601a9ab113",
      userName: "Jane Smith",
      userEmail: "jane.smith@example.com",
    },
    amount: "319.52",
    creationDatetime: "2024-01-26T14:23:11.812Z",
    type: "INCOME",
  },
  {
    id: "3",
    user: {
      userId: "78c1-69bd-4e15-831a-9b2e3b4e9121",
      userName: "Alex Johnson",
      userEmail: "alex.johnson@example.com",
    },
    amount: "92.14",
    creationDatetime: "2024-01-26T14:23:11.812Z",
    type: "OUTCOME",
  },
  {
    id: "4",
    user: {
      userId: "aef3-721c-45b0-8e5a-5891bdf0c227",
      userName: "Emily Brown",
      userEmail: "emily.brown@example.com",
    },
    amount: "581.76",
    creationDatetime: "2024-01-26T14:23:11.812Z",
    type: "INCOME",
  },
  {
    id: "5",
    user: {
      userId: "c690-21a9-4e6d-8d2d-0a8b89504222",
      userName: "Daniel Wilson",
      userEmail: "daniel.wilson@example.com",
    },
    amount: "447.85",
    creationDatetime: "2024-01-26T14:23:11.812Z",
    type: "OUTCOME",
  },
];

// TODO: data fetching
export const Dashboard: FC = () => {
  const authStore = useAuthStore();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const {user} = authStore;
      if (user?.id) {
        try {
          const data = (await UserProvider.getExpenses(user.id)).data;
          setTransactions(data);
        } catch (e) {
          // TODO: handle error
        }
      }
    };
    void fetch();
  }, [authStore]);

  const {user} = authStore;

  if (!user) return null;

  return (
    <Layout>
      <div className="mb-2 flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">View date</div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {user.budget && (
            <Card className=" bg-[#EF4040]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white">
                  Initial capital
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  C{user.budget.initialCapital}
                </div>
              </CardContent>
            </Card>
          )}

          {user.budget && (
            <Card className="bg-[#33BBC5]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white">
                  Current capital
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  C{user.budget.currentCapital}
                </div>
              </CardContent>
            </Card>
          )}

          {user.budget?.savings && (
            <Card className="bg-[#A084E8]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white">
                  Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  C{user.budget.savings.amount}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <Overview transactions={TRANSACTIONS as any} />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Transactions</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <Transactions transactions={TRANSACTIONS as any} />
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
