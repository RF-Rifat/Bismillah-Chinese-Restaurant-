"use client"
import Image from "next/image"

const loading = () => {
  return (
    <div className="h-[100svh] m-auto">
      <Image className="mx-auto" src="/image/loading.gif" height={500} width={500} alt="loading Image"/>
    </div>
  );
}

export default loading