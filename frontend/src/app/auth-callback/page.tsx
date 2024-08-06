// the only purpose of this page is to, sync the logged in user and make sure they are also in the database

import { useRouter, useSearchParams } from "next/navigation"



function AuthCallback() {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    
  return (
    <div>

    </div>
  )
}

export default AuthCallback