import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="grid h-16 place-items-center py-20 bg-pink-200 min-h-screen">
      <div className="text-4xl font-serif text-white">Wooohooo!!</div>
      <Image src="/yes.gif" height={500} width={500} />
    </div>
  );
}

export default page