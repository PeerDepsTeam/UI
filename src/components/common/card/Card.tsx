import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {FC, ReactNode, useState} from "react";
import {motion} from "framer-motion";
import {CircleIcon, StarIcon} from "@radix-ui/react-icons";
import {Course} from "@/services/api/gen";

type CardProps = {
  course: Course;
  color: string;
  children: ReactNode;
};

export const Cards: FC<CardProps> = ({color, course, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  function show() {
    setIsOpen(!isOpen);
  }

  return (
    <motion.div
      layout
      transition={{layout: {transition: 1, type: "tween"}}}
      onClick={show}
    >
      <Card style={{backgroundColor: color, color: "white"}}>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle className="text-sm">{course.module}</CardTitle>
            <CardDescription className="text-xs text-white">
              {course.description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          {isOpen && <div className="text-xs">{course.content}</div>}
          <div className="flex justify-between space-x-4 text-sm text-white">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              Expenses
            </div>
            <div className="flex items-center">
              <StarIcon className="mr-1 h-3 w-3" />
              20k readers
            </div>
            <div className="flex items-center">{children}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
