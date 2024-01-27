import {FC} from "react";

import {Separator} from "@/components/ui/separator";
import {Card, CardContent} from "@/components/ui/card";

import SignUpForm from "./SignupForm";

export const Signup: FC = () => {
  return (
    <>
      <div className="container relative  flex-col items-center justify-center bg-yellow-50 md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative  flex-col items-center justify-center lg:flex">
          <img
            src="/src/assets/signup.jpeg"
            alt="image sign up"
            className=""
            width={600}
          ></img>
        </div>
        <div className="mt-0  lg:p-8">
          <div className="flex w-full flex-col justify-center space-y-6  lg:max-w-lg">
            <Card className="mx-auto mt-1 max-w-[500px] space-y-6 bg-white bg-opacity-50 p-8 backdrop-blur-lg backdrop-filter">
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

            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
