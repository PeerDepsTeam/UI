import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {format} from "date-fns";
import {CalendarIcon} from "lucide-react";
import {GoogleAuthProvider} from "firebase/auth";
import {v4 as uuid} from "uuid";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {GoogleIcon} from "@/components/icon/GoogleIcon";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import {Calendar} from "@/components/ui/calendar.tsx";
import {cn} from "@/lib/utils.ts";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";
import {AuthProvider} from "@/services/security";
import {User} from "@/services/api/gen";
import {useAuthStore} from "@/useAuthStore.ts";
import {useNavigate} from "react-router-dom";

// Define the Zod schema for form validation
const schema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  username: z.string().min(3).max(20),
  sex: z.enum(["M", "F"]),
  birthdate: z.date(),
});

// Define the form data type
type FormData = z.infer<typeof schema>;

const SignUpForm: React.FC = () => {
  const store = useAuthStore();
  const navigate = useNavigate();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const uid = uuid();
      const user: User = {
        ...data,
        id: uid,
        budget: {
          id: uuid(),
          userId: uid,
          currentCapital: 10,
          initialCapital: 10,
          savings: {id: uuid(), amount: 0},
        },
      };
      const created = (
        await AuthProvider.signUpWithProvider(GoogleAuthProvider, user)
      ).data;
      store.setUser(created);
      navigate("/dashboard");
    } catch (e) {
      // TODO: handle error
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input placeholder="Lee" {...form.register("firstName")} />
            {form.errors?.firstName && (
              <span>{form.errors?.firstName.message}</span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input placeholder="Robinson" {...form.register("lastName")} />
            {form.errors?.lastName && (
              <span>{form.errors.lastName.message}</span>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input placeholder="leerob" {...form.register("username")} />
          {form.errors?.username && (
            <span>{form.errors?.username.message}</span>
          )}
        </div>
        <div className="space-y-2">
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
        </div>
        <div className="space-y-2">
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
        <Button
          className="flex w-full items-center justify-center space-x-2"
          variant="outline"
          type="submit"
        >
          <GoogleIcon />
          <span>Sign up with Google</span>
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
