"use server";
import getCookie from "@/services/getCookie";

export default async function ConnectBank({bankName, name, account, swift, country}) {
  const userId = (await getCookie('c_user')).value

    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/connect-bank/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        //   'User-Agent': userAgent,
        },
        body: JSON.stringify({
            bankName,
            name,
            account,
            swift,
            country,
           
        }),
      }
    );

    // Read the response body only once
    const data = await result.json();
 
    return data;
}
