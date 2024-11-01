'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Login from "@/lib/api/Login"
import { ReloadIcon } from "@radix-ui/react-icons"

import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import signin from '@/public/signin.png'
import { useRouter } from "next/router"


export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image."

export const iframeHeight = "800px"

export const containerClassName = "w-full h-full p-4 lg:p-0"

const SignIn = () => {
  // const router = useRouter()
    const { toast } = useToast()
    const [isLoading , setIsLoading] = useState(false)
 

    const handleSubmit = async(formData) =>{
        setIsLoading(true)
        console.log(isLoading)
        const identifier = formData.get('identifier')
        const password = formData.get('password')
        console.log(identifier, password)
        try {
            const result = await Login(identifier, password)
            if(result){
              // router.push('/home')
              // setIsLoading(false)
            }
            console.log(result)
        if(result?.status ===401){
            setIsLoading(false)
            toast({
                variant: "destructive",
                title: result.msg,
         
              })
        }

        } catch (error) {
          toast({
            variant: "destructive",
            title: "Something went wrong",
            description: "There was a problem with your request.",
          })
            console.log(error, 'login error')
            setIsLoading(false)
        }
    }


  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-[100vh]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form className="grid gap-4" action={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email or Username</Label>
              <Input
                id="email"
                type="text"
                name= "identifier"
                placeholder="Email or Username"
      
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
             
              </div>
              <Input id="password" type="password" placeholder ="Password"  name ="password" />
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-300">
                {isLoading}
            {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
         
          </form >
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

export default SignIn