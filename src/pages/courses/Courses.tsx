import { Cards } from "@/components/common/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BellIcon, GearIcon, ReaderIcon, ResetIcon, RocketIcon, StarIcon } from "@radix-ui/react-icons"
import { FC, useEffect, useState } from "react";


export const Courses : FC = ()=>{
    const [courses, setCourses] = useState<number[]>([5, 5, 5, 5]);

    useEffect(()=>{
        //setCourses([5])
    }, [])

    return(
        <div className="h-[100vh] p-4 flex">
            <div className="h-full flex flex-col justify-around p-12">
                <div className="text-center items-center p-12 font-bold">Courses</div>
                <div className="m-auto w-full">
                        <div className="my-2"><Button className="w-full border-2 border-violet-200" variant="outline">
                            <ReaderIcon className="mr-2 h-4 w-4" />
                            Courses
                        </Button></div>
                        <div className=""><Button className="w-full border-2 border-violet-200" variant="outline">
                            <StarIcon className="mr-2 h-4 w-4" />
                            Ranking
                        </Button></div>
                        <div className="my-2"><Button className="w-full border-2 border-violet-200" variant="outline">
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
                        <Cards/>
                    </div>
                ))
            }
            </div>
            <div className="m-auto">
               
            </div>
        </div>
    )
}