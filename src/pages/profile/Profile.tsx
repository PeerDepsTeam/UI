import {FC} from "react";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Layout} from "@/layout";
import {User} from "@/services/api/gen";
import AvatarLogged from "../../assets/profile-login.png";
import {Card} from "@/components/ui/card";

export const Profile: FC = (props: User) => {
  return (
    <Layout>
      <ProfileLayout profile={props} />
    </Layout>
  );
};

interface ProfileLayoutProps {
  profile: User;
}

const ProfileLayout: FC<ProfileLayoutProps> = ({profile}) => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 shadow-lg">
      <div className="w-[50%] rounded-xl bg-white p-8 shadow-lg">
        <div className="flex flex-col items-center">
          <Avatar className="h-40 w-40">
            <AvatarImage src={AvatarLogged} />
          </Avatar>
          <p
            className="mt-4 text-center font-bold text-violet-300"
            style={{fontSize: "xx-large"}}
          >
            <h3>{profile.username?.toUpperCase()}</h3>
          </p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <Card className="flex flex-col border-none p-4">
            <small className="text-gray-400">Lastname:</small>
            <p>{profile.lastName}</p>
          </Card>
          <Card className="flex flex-col border-none p-4">
            <small className="text-gray-400">Firstname:</small>
            <p>{profile.firstName}</p>
          </Card>
          <Card className="flex flex-col border-none p-4">
            <small className="text-gray-400">Email:</small>
            <p>{profile.email}</p>
          </Card>
          <Card className="flex flex-col border-none p-4">
            <small className="text-gray-400">Birthday:</small>
            <p>{profile.birthdate?.toLocaleDateString()}</p>
          </Card>
          <Card className="flex flex-col border-none p-4">
            <small className="text-gray-400">Sex:</small>
            <p>{profile.sex}</p>
          </Card>
          <Card className="flex flex-col border-none p-4">
            <small className="text-gray-400">Budget:</small>
            <p>{profile.budget?.currentCapital}</p>
          </Card>
        </div>
      </div>
    </div>
  );
};
