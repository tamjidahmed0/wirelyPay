'use server'
import getCookie from '@/services/getCookie'

export default async function DeleteBanks ({bankId}) {
    const userId = (await getCookie('c_user')).value

            const result = await fetch(`${process.env.NEXT_PUBLIC_API}/api/delete-banks/${userId}?bankId=${bankId}`,
            {
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${token.value}`,
                    // "userid": user,
                }
            }
            
            )

return result.json()
         

    
}