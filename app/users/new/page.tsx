'use client'
// import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const NewUser = () => {
    const router = useRouter();
  return (
    <button onClick={()=> router.push('/users')} className='btn-primary btn'>Submit</button>
  )
}

export default NewUser