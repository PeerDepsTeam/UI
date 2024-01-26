import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FC, useEffect, useState } from "react";

type CardProps = {
    course : any,
    color: string
}


export const Cards : FC<CardProps> = ()=>{
    const [progress, setProgress] = useState(13)
 
    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500)
      return () => clearTimeout(timer)
    }, [])
  
    return(
        <Card className={`w-[380px]`}>
            <CardHeader>
                <CardTitle className="text-md">Manage your expense</CardTitle>
                <CardDescription className="text-xs text-light">Managing expenses effectively is an important aspect of personal and financial well-being.</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter>
                <Progress value={progress} className="w-full h-2" />
            </CardFooter>
        </Card>
    )
}