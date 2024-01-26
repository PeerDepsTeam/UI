import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import loginImage from "../../assets/login.jpg";
import { Link } from "react-router-dom";

export const Login: FC = () => (
  <div style={{
    width: "70%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    alignContent:"center",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "row",
    borderRadius:"20px",
    gap: "12%"
  }}>
    <Card className="w-[50%]" style={{ width: "50%", height: "100%", border: "none" }}>
      <h1 style={{
        marginLeft:"4%",
        fontWeight:"bold",
        color:'#ddc8e0',
        fontSize:"60px"
        }}>EDUC-FI .</h1>
      <CardHeader>
        <CardTitle style={{
          fontSize: "x-large",
          fontWeight:"normal",
          marginBottom:"20px"
        }}>FIND THE BEST <br/>
        WAY TO TEACH YOUR KIDS TO <br/>
        ECONOMIZE IN THE REAL LIFE USING THIS <br/>
        PLATFORM .
        </CardTitle>
        <CardDescription>
          La solution pour l'éducation financière de vos enfants.
          Découvrez la solution idéal pour votre petit apprenti bussiness man tout en intéragissant avec des simulations sous formes de Quizz .
        </CardDescription>
      </CardHeader>
      <CardContent>
{/*         <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
          </div>
        </form> */}
        <div className="flex justify-between mt-4">
        <Button variant="outline" style={{ backgroundColor: "#ddc8e0", color: "white", border: "1px solid #ddc8e0" }}>
          Login with Google
        </Button>

        <Button variant="outline" style={{ backgroundColor: "#1877F2", color: "white", border: "1px solid #1877F2" }}>
          Login with Facebook
        </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between mt-4">
        <Button variant="outline"> &lt; </Button>
        <small>
          <Link to={"/signup"} style={{color:'blue'}}>S'enregistrer</Link>
        </small>
      </CardFooter>
    </Card>
    <Card className="w-[50%]" style={{border: "none"}}>
      <CardContent style={{ width: "100%", height: "100%" }}>
        <img src={loginImage} style={{ width: "600px", height: "550px", objectFit: "contain" }} />
      </CardContent>
    </Card>
  </div>
);
