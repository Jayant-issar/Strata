"use client"

import { useState } from "react"
import { QueryClient} from "@tanstack/react-query"


const Providers = () => {
    const [queryClient, setqueryClient] = useState(()=>{new QueryClient()})

    const [trpcClient, settrpcClient] = useState(()=>{})

}

export default Providers