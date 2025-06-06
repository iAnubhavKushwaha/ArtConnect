import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b'>
        <div className='wrapper flex items-center justify-between'>
            <Link href='/' className='w-36'>
                <Image src='/assets/images/ArtConnect-logo.svg' width={160} height={50} alt='logo'/>
            </Link>


            <SignedIn>
                <nav className='md:flex-between hidden w-full max-w-xs'>
                    <NavItems />
                </nav>
                
            </SignedIn>           
           
            <div className='flex w-32 justify-end gap-3'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/'/>
                    <MobileNav/>
                </SignedIn>
                <SignedOut>
                    <Button asChild className='rounded-full bg-purple-500' size='lg'>
                        <Link href='/sign-in'>
                        Login
                        </Link>
                    </Button>
                </SignedOut>

            </div>

        </div>
    </header>
  )
}

export default Header