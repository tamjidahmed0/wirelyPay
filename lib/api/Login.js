"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import action from "@/services/action";


export default async function Login(identifier, password, userAgent) {

    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          'User-Agent': userAgent,
        },
        body: JSON.stringify({
          identifier: identifier,
          password: password,
        }),
      }
    );

    // Read the response body only once
    const data = await result.json();

    if (result.status === 201) {

      const { token, id } = data;

      // Perform actions like storing the token and id
      action("token", token);
      action("c_user", id);
      
      redirect('/home');
      
     
     



    }
 
    return data;
}
