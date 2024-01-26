import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Toggle } from "@/components/ui/toggle";
import { GearIcon, ReaderIcon, RocketIcon, StarIcon } from "@radix-ui/react-icons"
import { FC } from "react";

export const Courses : FC = ()=>{

    return(
        <div className="h-[100vh] p-4 flex justify-items-end">
            <div className="h-full flex flex-col justify-around">
                <div className="text-center items-center p-12 font-bold">Courses</div>
                <div className="m-auto w-full">
                        <div className="my-2"><Toggle className="w-full">
                            <ReaderIcon className="mr-2 h-4 w-4" />
                            Courses
                        </Toggle></div>
                        <div className=""><Toggle className="w-full">
                            <StarIcon className="mr-2 h-4 w-4" />
                            Ranking
                        </Toggle></div>
                        <div className="my-2"><Toggle className="w-full">
                            <GearIcon className="mr-2 h-4 w-4" />
                            Settings
                        </Toggle></div>
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
            <div>
            
            </div>
            <div></div>
        </div>
    )
}