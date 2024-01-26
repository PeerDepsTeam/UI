import {FC} from "react";

import {Separator} from "@/components/ui/separator";
import {Card, CardContent} from "@/components/ui/card";

import SignUpForm from "./SignupForm";

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
            <SignUpForm />
            <Separator className="my-8" />
            <div className="space-y-4">
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
