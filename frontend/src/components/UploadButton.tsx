"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"

function UploadButton() {
    const [isOpen, setisOpen] = useState<boolean>(false)
  return (
    <Dialog open={isOpen} onOpenChange={(v)=> {
        if(!v){
            setisOpen(v)
        }
    }} >
        <DialogTrigger onClick={()=>{
            setisOpen(true)
        }} asChild>
            <Button>Upload pdf</Button>
        </DialogTrigger>
        <DialogContent>
            example content
        </DialogContent>
    </Dialog>
  )
}

export default UploadButton