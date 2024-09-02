"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

function Navbar() {
    const pathName = usePathname()

    const { data: session, status } = useSession()

    return (
        <nav className='flex justify-around my-4 items-center'>
            <Link href={'/'} className='font-bold text-2xl'>
                TheBlogs
            </Link>

            <ul className='flex space-x-2'>
                <li>
                    <Link href={'/blog'} className={pathName === '/blog' ? 'font-bold' : 'text-black'}>Blog</Link>
                </li>

                {
                    session?.user ? (
                        <>
                            <li>
                                <Link href={'/create-blog'} className={pathName === '/create-blog' ? 'font-bold' : 'text-black'}>Create</Link>
                            </li>
                            <li>
                                <Link href={'/user'} className={pathName === '/user' ? 'font-bold' : 'text-black'}>Profile</Link>
                            </li>
                            <li>
                                <span onClick={() => signOut()} className='cursor-pointer'>Logout</span>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href={'/login'} className={pathName === '/login' ? 'font-bold' : 'text-black'}>Login</Link>
                            </li>
                            <li>
                                <Link href={'/register'} className={pathName === '/register' ? 'font-bold' : 'text-black'}>Register</Link>
                            </li>
                        </>
                    )
                }





            </ul>
        </nav>
    )
}

export default Navbar