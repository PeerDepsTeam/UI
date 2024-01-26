import {FC} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export const Profile: FC = () => <ProfileLayout />;

const ProfileLayout: FC<any> = ({profile}) => (
  <>
    <div className="w-100 flex">
      <div className="w-1/3"></div>

      <div className="flex-1 p-5">
        <div className="flex items-center gap-x-8">
          <Avatar className="h-40 w-40">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>
          <div className="components flex flex-col items-center">
            <div>
              <p className="text-lg font-bold">Sara Tancredi</p>
            </div>
            <div>
              <p>New York, USA</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-y-8 ">
          <div>
            <p className="mb-2">First Name</p>
            <div className=" h-10 ">
              <Input className=" h-10 w-3/4"></Input>
            </div>
          </div>

          <div>
            <p className="mb-2">Last Name</p>
            <div className="h-10 w-full">
              <Input className="h-10  w-3/4"></Input>
            </div>
          </div>

          <div className="w-100">
            <p className="mb-2">Sex</p>
            <div className=" h-10 w-full">
              <Input className="h-10 w-3/4"></Input>
            </div>
          </div>

          <div>
            <p className="mb-2">Username</p>
            <div className="input h-10 w-full">
              <Input className=" h-10 w-3/4"></Input>
            </div>
          </div>

          <div>
            <p className="mb-2">Birthdate</p>
            <div className="input h-10 w-full">
              <Input className="h-10  w-3/4"></Input>
            </div>
          </div>

          <div>
            <p className="mb-2">Email</p>
            <div className="input h-10 w-full">
              <Input className="h-10  w-3/4"></Input>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  </>
);

export default ProfileLayout;
