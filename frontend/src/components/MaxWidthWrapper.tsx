// the purpose of this wrapper is just to, be resuseable and the distance between right and left is always the same.

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type MaxWidthWrapperProps = {
    className?:string;
    children: ReactNode;
}


function MaxWidthWrapper(MaxWidthWrapperProps:MaxWidthWrapperProps) {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20",MaxWidthWrapperProps.className)}>
        {MaxWidthWrapperProps.children}
    </div>
  )
}

export default MaxWidthWrapper