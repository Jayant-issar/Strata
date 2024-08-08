"use client"
// the only purpose of this page is to, sync the logged in user and make sure they are also in the database

import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/client"
import { Loader2 } from "lucide-react"



function AuthCallback() {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')
    
    const { isSuccess,isError,error } = trpc.authCallback.useQuery(undefined)
    
    if(isSuccess){
      //user is synced to the database
      router.push(origin ? `/${origin}` : '/dashboard')
    }
    if(isError){
      if(error.data?.code==="UNAUTHORIZED"){
        router.push("/sign-in")
      }
    
    }
  return (
    <div className=" w-full mt-24 flex justify-center">
      <div className=" flex flex-col items-center gap-2">
        <Loader2 className=" h-8 w-8 animate-spin text-zinc-800"/>
        <h3 className=" font-semibold text-xl">setting up your account...</h3>
        <p>you will be redirected automatically</p>
      </div>
        
    </div>
  )
}

export default AuthCallback