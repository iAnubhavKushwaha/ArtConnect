import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const ProfilePage = async () => {
    const {sessionClaims} = await auth();
    const userId = sessionClaims?.userId as string;

    const organizedEvents = await getEventsByUser({ userId, page: 1})

  return (
    <>
      {/* My Tickets */}
      <section className="bg-purple-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-between sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button asChild size='lg' className="hidden sm:flex bg-purple-500">
            <Link href="/#Events">Explore More Events</Link>
          </Button>
        </div>
      </section>
{/* 
      <section className="wrapper my-8">
        <Collection
          data={events?.data}
          emptyTitle="No event tickets purchased yet"
          emptyStateSubtext="Explore more to choose from!"
          collectionTypes="My_Tickets"
          limit={3}
          page={1}
          urlParamName="ordersPage"
          totalPages={2}
        />
      </section> */}

      {/* Events Organised */}
      <section className="bg-purple-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-between sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
          <Button asChild size='lg' className="hidden sm:flex bg-purple-500">
            <Link href="/events/create">Create New </Link>
          </Button>
        </div>
      </section>

      
      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          emptyTitle="No events have been created"
          emptyStateSubtext="Go create one now!"
          collectionTypes="My_Tickets"
          limit={6}
          page={1}
          urlParamName="eventsPage"
          totalPages={2}
        />
      </section>
    </>
  );
};

export default ProfilePage;
