import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import loginImage from "../../assets/back.jpg";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import arrowLeft from "../../assets/icone.gif";

const Login: FC = () => (
  <div className="h-screen flex justify-center items-center bg-gradient-to-br from-yellow-100 to-pink-200 to-white-900 via-yellow-50">
    <Card className="w-[1000px] flex flex-row border-none shadow-none mx-auto bg-opacity-50 bg-white backdrop-filter backdrop-blur-lg p-8 rounded-lg">
      <Card className= "w-[60%] border-none shadow-none mx-auto bg-transparent" style={{marginTop:"1%", backgroundColor:"transparent"}}>  
        <Link to={'/'}><img src={arrowLeft} width="20px" height="20px" style={{borderRadius:"50%", marginLeft:"4%"}}/></Link>
        <h1 className="ml-4 font-bold text-purple-400 text-6xl">EDUC-FI .</h1>
        <br />
        <hr className="text-purple-400 w-16 ml-5" />
        <CardHeader>
          <CardTitle className="text-xl font-normal mb-4">
            THE MOST EFFECTIVE <br />
            WAY TO TEACH YOUR KIDS <br />
            HOW TO SAVE MONEY IN REAL LIFE <br />
            IS BY USING THIS PLATFORM.
          </CardTitle>
          <CardDescription>
            The solution for your children's financial education.
            Discover the ideal solution for your little business apprentice,
            while interacting with simulations in the form of quizzes.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-[100%]">
          <div className="flex justify-center flex-col mt-4">
          <Button
              variant="outline"
              className="bg-purple-300 text-white border-purple-100 mb-5"
            >
              <Link to={'/signup'}>SIGN UP</Link>
            </Button>
            <div className="flex flex-row align-middle justify-between">
              <Separator orientation="vertical" className="w-[30px] z-30" /> 
                <small> OR </small>
              <Separator orientation="vertical" className="w-[30px] z-30 mt-10"/>
            </div>
            <Button
              variant="outline"
              className="flex w-full space-x-2 bg-white-400 justify-center items-center  text-black border-purple-100"
            > 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="5px"
                width="20px"
                height="20px"
                viewBox="0 0 48 48"
              >
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              <span className="pl-3">Login with Google</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="w-[60%] border-none shadow-none" 
        style={{
          backgroundImage:`url(${loginImage})`, 
          backgroundSize: 'cover',
          backgroundPosition:"center"
        }} />
    </Card>
  </div>
);

export default Login;