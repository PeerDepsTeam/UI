import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
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

// Define the Zod schema for form validation
const schema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  username: z.string().min(3).max(20),
  sex: z.string().min(1),
  birthdate: z.date(),
});

// Define the form data type
type FormData = z.infer<typeof schema>;

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input
              id="first-name"
              placeholder="Lee"
              {...register("firstName")}
              required
            />
            {errors.firstName && <span>{errors.firstName.message}</span>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input
              id="last-name"
              placeholder="Robinson"
              {...register("lastName")}
              required
            />
            {errors.lastName && <span>{errors.lastName.message}</span>}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="leerob"
            {...register("username")}
            required
          />
          {errors.username && <span>{errors.username.message}</span>}
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
                <SelectItem {...register("sex", {required: true})} value="male">
                  Male
                </SelectItem>
                <SelectItem
                  {...register("sex", {required: true})}
                  value="female"
                >
                  Female
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.sex && <span>{errors.sex.message}</span>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="birthdate">Birthdate</Label>
          <Input
            id="birthdate"
            {...register("birthdate")}
            required
            type="date"
          />
          {errors.birthdate && <span>{errors.birthdate.message}</span>}
        </div>
        <Button
          className="flex w-full items-center justify-center space-x-2"
          variant="outline"
          type="submit"
        >
          <GoogleIcon />
          <span>Sign up with Google</span>
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
