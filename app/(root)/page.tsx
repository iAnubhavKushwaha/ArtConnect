import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  const events = await getAllEvents({
    query: '',
    category: '',
    page: 1,
    limit: 6,
  })

  console.log(events)

  return (
    <>
      <section className="bg-purple-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Magic!</h1>
            <p className="p-regular-20 md:p-regular-24">Unlock expert advice from 3,168+ mentors at world-class companies—your global community awaits!</p>
            <Button size="lg" asChild className="button w-full sm:w-fit bg-purple-500">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/hero2.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] rounded-2xl"
          />
        </div>
      </section> 

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">
            Trusted with ❤️ <br/> Thousands of Events
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <h3 className="font-bold">Search -- component</h3>
          CategoryFilter

        </div>

        <Collection
          data={events?.data}
          emptyTitle="None Events Found"
          emptyStateSubtext="Come back later!"
          collectionTypes="All_Events"
          limit={6}
          page={1}
          totalPages={2}
          />

      </section>
    </>
  );
}
