
export const dynamic = "force-dynamic";
"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";


export default function SignInPage() {

  const searchParams = useSearchParams()

  useEffect(() => {
    const message = searchParams.get("message")

    if (message === "login-required") {
      toast.warning("Please login first")
    }
  }, [searchParams])

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      
    });
    if (error) {
      toast.error(error.message || "Login failed");

    } else {
      
      
      toast.success("Login Success");
      router.push("/");
    }
    console.log({ data, error });
  };

  const handlGoogleSignIn = async () => {
    const {data, error} = await authClient.signIn.social({
        provider: 'google'
    })
    if (error) {
      toast.error(error.message || "Login failed");

    } else {
      
      
      toast.success("Login Success");
      router.push("/");
    }
  }



  return (
    <Card className="border mx-auto w-65 sm:w-115 py-10 my-10 md:my-20">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-56 sm:w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>

      <p className="text-center">Or</p>

      <Button onClick={handlGoogleSignIn} variant="outline" className='w-56 sm:w-full'><GrGoogle/> Sign In With Google</Button>
      <Link href={"/signup"}><Button variant="outline" className='bg-green-500 w-56 sm:w-full'>Create new account</Button></Link>
    </Card>
  );
}
