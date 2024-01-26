import {FC} from "react";

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {Card, CardContent} from "@/components/ui/card";

import {GoogleIcon} from "@/components/icon/GoogleIcon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Signup: FC = () => {
  return (
    <Card className="mx-auto mt-12 max-w-[350px] space-y-6">
      <CardContent className="mt-6">
        <div className="mx-auto max-w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your information to create an account
            </p>
          </div>
          <div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Lee" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Robinson" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="leerob" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sex">Sex</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a sex" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sex</SelectLabel>
                      <SelectItem value="apple">Male</SelectItem>
                      <SelectItem value="banana">Female</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthdate">Birthdate</Label>
                <Input id="birthdate" required type="date" />
              </div>
              <Button className="w-full" type="submit">
                Sign Up
              </Button>
            </div>
            <Separator className="my-8" />
            <div className="space-y-4">
              <Button
                className="flex w-full items-center justify-center space-x-2"
                variant="outline"
              >
                <GoogleIcon />
                <span>Sign up with Google</span>
              </Button>
              <div className="mt-4 text-center text-sm">
                Already have an account?
                <a className="underline" href="/login">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
