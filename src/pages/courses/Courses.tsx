import {Cards} from "@/components/common/card";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  GearIcon,
  ReaderIcon,
  RocketIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import {FC, useEffect, useState} from "react";
import {ActivityProvider} from "../../services/api/providers/activity_provider";
import {Course} from "@/sevices/api/gen/";
import {motion} from "framer-motion";
import {UserProvider} from "@/services/api";
import {User} from "@/services/api/gen";
import {Link} from "react-router-dom";
import {LockIcon, Unlock, UnlockIcon} from "lucide-react";

const colors = [
  "#3559E0",
  "#A66CFF",
  "#FAEA48",
  "#DF826C",
  "#9B59B6",
  "#2ECC71",
  "#F39C12",
  "#8E44AD",
  "#1ABC9C",
  "#D35400",
  "#C0392B",
  "#27AE60",
  "#2980B9",
  "#E67E22",
  "#16A085",
];

export const Courses: FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isAuthetincated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const courses = await ActivityProvider.getMany({page: 1, pageSize: 20});
      setCourses(courses.data);
    };
    const fetchUser = async () => {
      const users = await UserProvider.getMany();
      console.log(users);

      setUsers(users.data);
    };
    void fetchUser();
    void fetch();
  }, []);

  return (
    <div className="flex h-[100vh] p-4">
      <motion.div
        className="flex h-full flex-col justify-around p-12"
        initial={{opacity: 0, translateX: -50, translateY: -50}}
        animate={{opacity: 1, translateX: 0, translateY: 0}}
        transition={{transition: 1, delay: 0.5}}
      >
        <div className="items-center p-12 text-center font-bold">Courses</div>
        <div className="m-auto w-full">
          <div className="my-2">
            <Button className="w-full" variant="secondary">
              <ReaderIcon className="mr-2 h-4 w-4" />
              Courses
            </Button>
          </div>
          <div className="">
            <Button className="w-full" variant="secondary">
              <StarIcon className="mr-2 h-4 w-4" />
              Ranking
            </Button>
          </div>
          <div className="my-2">
            <Button className="w-full" variant="secondary">
              <GearIcon className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
        <div>
          <Alert className="bg-[#332941] p-4 text-white">
            <RocketIcon className="h-4 w-4" color="white" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              Updgrade your plan with{" "}
              <span>
                <a className="text-bold underline" href="">
                  Pro Plan
                </a>
              </span>
            </AlertDescription>
          </Alert>
        </div>
      </motion.div>
      <div className="h-full overflow-auto scroll-smooth p-6">
        <div className="text-2xl font-bold">Course Activity</div>
        <div className="text-violet-800">{new Date().toUTCString()}</div>
        {courses.map((course, k) => (
          <div className="my-2">
            {isAuthetincated ? (
              <Link to={`/courses/${course.id}`}>
                <Cards course={course} color={colors[k]}>
                  <UnlockIcon />
                </Cards>
              </Link>
            ) : (
              <Cards course={course} color={colors[k]}>
                <LockIcon />
              </Cards>
            )}
          </div>
        ))}
      </div>
      <div className="m-12 w-96 overflow-auto">
        <Card className="border[#EDEDED] w-full border border-opacity-50 bg-[#EDEDED] bg-opacity-35">
          <CardHeader>
            <CardTitle>Users Ranking</CardTitle>
            <CardDescription>Hall of the fame</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            {users.map((user, k) => (
              <motion.div
                initial={{opacity: 0, translateX: -50, translateY: -50}}
                animate={{opacity: 1, translateX: 0, translateY: 0}}
                transition={{transition: 1, delay: k * 0.3}}
              >
                <div
                  key={k}
                  className="flex items-center justify-between space-x-4"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/avatars/01.png" />
                      <AvatarFallback>
                        {(
                          user.firstName[k] +
                          " " +
                          user.lastName[k]
                        ).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {user.firstName + " " + user.lastName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <div>
                    {Math.round(Number.parseFloat(user.budget?.currentCapital))}
                  </div>
                  <StarIcon className="ml-2 h-4 w-4 text-muted-foreground text-yellow-500" />
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
