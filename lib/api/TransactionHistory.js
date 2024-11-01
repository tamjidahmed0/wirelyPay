'use server'
import { cookies } from 'next/headers'
import getCookie from '@/services/getCookie'

export default async function TransactionHistory (bankId ='') {
    const userId = (await getCookie('c_user')).value

            const result = await fetch(`${process.env.NEXT_PUBLIC_API}/api/transaction-history/${userId}?bankId=${bankId}`,
            {
                method:'GET',
                headers:{
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${token.value}`,
                    // "userid": user,
                }
            }
            
            )

return result.json()
         

    
}