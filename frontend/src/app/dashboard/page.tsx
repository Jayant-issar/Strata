import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

import React from 'react'

async function DashBoard() {
    const {getUser, } = getKindeServerSession()
    const user = await getUser()
    
    //redirecting user the call back if the user is not signed in
    if (!user || !user.id) redirect('/auth-callback?origin=dashboard')
  return (
    <div>
        
    </div>
  )
}

export default DashBoard