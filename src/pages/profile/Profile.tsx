import {FC} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {format} from "date-fns";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {CalendarIcon} from "lucide-react";
import {ProfileSchema} from "@/pages/profile/schema.ts";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";
import {Calendar} from "@/components/ui/calendar.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import {Layout} from "@/layout";
import {cn} from "@/lib/utils.ts";

export const Profile: FC = () => {
  return (
    <Layout>
      <ProfileLayout
        profile={{
          firstname: "first",
          lastname: "last",
          username: "first",
          birthdate: new Date(),
          sex: "M",
          email: "dummy@gmail.com",
        }}
      />
    </Layout>
  );
};

interface ProfileLayoutProps {
  // TODO: type when api is ready
  profile: any;
}

const ProfileLayout: FC<ProfileLayoutProps> = ({profile}) => {
  const form = useForm({
    resolver: zodResolver(ProfileSchema),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    defaultValues: profile,
  });

  const updateProfile: SubmitHandler<z.infer<typeof ProfileSchema>> = (
    _update
  ) => {
    // TODO: update user profile
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const username = form.watch("username");

  return (
    <Form {...form}>
      <form className="w-100 flex" onSubmit={form.handleSubmit(updateProfile)}>
        {/* TODO: base LAYOUT */}
        <div className="w-1/3"></div>

        <div className="flex-1 p-5">
          <div className="flex items-center gap-x-8">
            <Avatar className="h-40 w-40">
              <AvatarImage src={profile.avatar} />
              <AvatarFallback>{/* TODO: default avatar */}</AvatarFallback>
            </Avatar>
            <div className="components flex flex-col items-center">
              <div>
                <p className="text-lg font-bold">{username}</p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-y-12">
            <div className=" h-10">
              <FormField
                name="firstname"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <Input className=" h-10 w-3/4" {...field} />
                  </FormItem>
                )}
              />
            </div>

            <div className=" h-10 ">
              <FormField
                name="lastname"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <Input className=" h-10 w-3/4" {...field} />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="sex"
              render={({field}) => (
                <FormItem className="space-y-3">
                  <FormLabel>Select sex</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormLabel>M</FormLabel>
                        <FormControl>
                          <RadioGroupItem value="M" />
                        </FormControl>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormLabel>F</FormLabel>
                        <FormControl>
                          <RadioGroupItem value="F" />
                        </FormControl>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className=" h-10 ">
              <FormField
                name="username"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>User name</FormLabel>
                    <Input className=" h-10 w-3/4" {...field} />
                  </FormItem>
                )}
              />
            </div>

            <div className="h-10">
              <FormField
                control={form.control}
                name="birthdate"
                render={({field}) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Your date of birth is used to calculate your age.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className=" h-10 ">
              <FormField
                name="email"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <Input className=" h-10 w-3/4" {...field} />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="mt-20">
            <Button>Save Changes</Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
