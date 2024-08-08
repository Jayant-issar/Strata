"use client"
import React from 'react'
import UploadButton from './UploadButton'
import { trpc } from '@/app/_trpc/client'
import { Ghost, MessagesSquare, Plus, Trash2 } from 'lucide-react'
import Skeleton from "react-loading-skeleton"
import Link from 'next/link'
import {format} from "date-fns"
import { Button } from './ui/button'
function Dasboard() {
  const {data:files, isLoading} = trpc.getUserFiles.useQuery()

    
  return (
    <main className='mx-auto max-w-7xl md:p-10'>
        <div className=' px-4 mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:items-center sm:flex-row sm:gap-0'>
            <h1 className=' mb-3 font-bold text-4xl md:text-5xl text-gray-900 '>My files</h1>
            
            <UploadButton/>
        </div>



        {/* display all user files */}
        {
        isLoading ? (
          <div>
            <Skeleton height={100} className=' my-2 ' count={3}/>
          </div>
        ) : (
          files && files.length !== 0 ? (
            <div>
              <ul className=' mt-8 grid grid-cols-1 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3 '>
                {
                  files.sort((a,b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((pdf)=>{
                    return (
                      <li key={pdf.id} className=' col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-md'>
                        <Link href={`/dashboard/${pdf.id}`} className=' flex flex-col gap-2'>
                          <div className=' pt-6 px-6 flex w-full items-center justify-between space-x-6'>
                              <div className=' h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500' />
                              <div className=' flex-1 truncate'>
                                <div className=' flex items-center sapce-x-3'>
                                  <h3 className=' truncate text-lg font-medium text-zinc-900'>
                                      {pdf.name}
                                  </h3>

                                </div>

                              </div>
                          </div>
                        </Link>

                        <div className='mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-sm text-zinc-500'>
                          <div className=' items-center flex gap-2'>
                            <Plus className=' h-4 w-4'/>
                            {format(new Date(pdf.createdAt),"MMM yyy")}

                          </div>

                          {/* to see how many messages has the user exchanged with the pdf */}
                        <div className='flex px-4 items-center gap-2'>
                          <MessagesSquare className=' h-4 w-4'/>
                          mocked
                        </div>

                        {/* users deleting messages */}
                        <Button size={'sm'} variant={'destructive' }>
                          <Trash2/>
                        </Button>
                        </div>
                          
                        
                      </li>
                    )
                  })

                  
                }

              </ul>
            </div>
          ) : (
            <div className='mt-16 flex flex-col items-center gap-2'>
              <Ghost className='h-8 w-8 text-zinc-800'/>
              <h3 className=' font-semibold text-xl'>Pretty empty around here</h3>
              <p>Let&apos;s upload your first PDF.</p>
            </div>
          )
        )
      }



    </main> 
  )
}

export default Dasboard