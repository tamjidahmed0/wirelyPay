"use server";
import getCookie from "@/services/getCookie";

export default async function TransferPayment({email, account, amount, ReceiverBankId, senderBankId}) {
  const userId = (await getCookie('c_user')).value

    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/transfer-money/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        //   'User-Agent': userAgent,
        },
        body: JSON.stringify({
          email,
          account,
          amount,
          ReceiverBankId,
          senderBankId
           
        }),
      }
    );

    // Read the response body only once
    const data = await result.json();
 
    return data;
}
