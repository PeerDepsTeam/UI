import { Cards } from "@/components/common/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GearIcon, ReaderIcon, RocketIcon, StarIcon } from "@radix-ui/react-icons"
import { FC, useEffect, useState } from "react";

const colors = ["#2ECC71", "#F0DE36", "#3498DB", "#E74C3C", "#9B59B6", "#2ECC71", "#F39C12", "#8E44AD", "#1ABC9C", "#D35400", "#C0392B", "#27AE60", "#2980B9", "#E67E22", "#16A085"];;


export const Courses : FC = ()=>{
    const [courses, setCourses] = useState<number[]>([5, 5, 5, 5]);
    const [users, setUsers] = useState([1, 2, 3, 4, 5, 6, 7])

    useEffect(()=>{
        //setCourses([5])
    }, [])

    return(
        <div className="h-[100vh] p-4 flex">
            <div className="h-full flex flex-col justify-around p-12">
                <div className="text-center items-center p-12 font-bold">Courses</div>
                <div className="m-auto w-full">
                        <div className="my-2"><Button className="w-full" variant="secondary">
                            <ReaderIcon className="mr-2 h-4 w-4" />
                            Courses
                        </Button></div>
                        <div className=""><Button className="w-full" variant="secondary">
                            <StarIcon className="mr-2 h-4 w-4" />
                            Ranking
                        </Button></div>
                        <div className="my-2"><Button className="w-full" variant="secondary">
                            <GearIcon className="mr-2 h-4 w-4" />
                            Settings
                        </Button></div>
                </div>
                <div>
                    <Alert className="bg-gray-900 p-4 text-white">
                        <RocketIcon className="h-4 w-4" color="white"/>
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            Updgrade your plan with <span><a className="underline text-bold" href="">Pro Plan</a></span>
                        </AlertDescription>
                    </Alert>
                </div>
            </div>
            <div className="h-full p-6 overflow-auto scroll-smooth">
                <div className="text-2xl font-bold">Course Activity</div>
                <div className="text-violet-800">{new Date().toUTCString()}</div>
            {
                courses.map((course, k)=>(
                    <div className="my-2">
                        <Cards color={colors[k]}/>
                    </div>
                ))
            }
            </div>
            <div className="w-96 m-12">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Users Ranking</CardTitle>
                        <CardDescription>
                        Top 7 Hall of the fame
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                      {
                        users.map((user, k)=>(
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex items-center space-x-4">
                                    <Avatar>
                                    <AvatarImage src="/avatars/01.png" />
                                    <AvatarFallback>OM</AvatarFallback>
                                    </Avatar>
                                    <div>
                                    <p className="text-sm font-medium leading-none">Sofia Davis</p>
                                    <p className="text-sm text-muted-foreground">m@example.com</p>
                                    </div>
                                </div>
                                    <StarIcon className="ml-2 h-4 w-4 text-yellow-500 text-muted-foreground" />
                                    <StarIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                                    <StarIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                            </div>
                        ))
                      }
                    </CardContent>
                    </Card>
            </div>
        </div>
    )
}