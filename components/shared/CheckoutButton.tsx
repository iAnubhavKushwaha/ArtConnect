"use client"

import { IEvent } from '@/lib/database/models/event.model'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import { Button } from '../ui/button';
import Link from 'next/link';
import Checkout from './Checkout';

const CheckoutButton = ({event}: {event: IEvent}) => {
    const {user} = useUser();
    const userId = user?.publicMetadata.userId as string
    const hasEventFinished = new Date(event.endDateTime) < new Date();


  return (
    <div className='flex items-center gap-3  '>
        {/* Cannot buy past Events */}
        {hasEventFinished ? (
            <p className='p-2 text-red-400'>Sorry, this event has finished.</p>
        ) : (
            <>
            <SignedOut>
                <Button asChild className=' rounded-full bg-purple-500' size='lg' >
                    <Link href="/sign-in">
                    Get Tickets
                    </Link>
                </Button>
            </SignedOut>
            <SignedIn>
                <Checkout event={event} userId={userId} />
            </SignedIn>
            </>
        )}
    </div>
  )
}

export default CheckoutButton