import Image from 'next/image';
import { FaRegCheckCircle, FaRegClock, FaRegCompass, FaRegHeart } from 'react-icons/fa';

export function Features() {
  return (
    <section id="benefits" className="bg-gray-50 py-20 font-inter">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#22225a]">How Jibhi Works</h2>
        {/* Stepper */}
        <div className="mb-16 flex flex-col gap-12 md:flex-row md:justify-center md:gap-8">
          <div className="flex flex-col items-center text-center md:w-1/3">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-[#e7e7fb] shadow">
              <FaRegCompass className="size-7 text-[#605CD4]" />
            </div>
            <h3 className="mb-2 text-lg font-bold">Tell us your dream trip</h3>
            <p className="text-base text-gray-600">
              Share your destination, dates, and vibe—or just a voice note.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:w-1/3">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-[#e7e7fb] shadow">
              <FaRegClock className="size-7 text-[#605CD4]" />
            </div>
            <h3 className="mb-2 text-lg font-bold">AI plans while you sleep</h3>
            <p className="text-base text-gray-600">
              Jibhi scans thousands of options and crafts your perfect itinerary in minutes.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:w-1/3">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-[#e7e7fb] shadow">
              <FaRegCheckCircle className="size-7 text-[#605CD4]" />
            </div>
            <h3 className="mb-2 text-lg font-bold">Book in one tap</h3>
            <p className="text-base text-gray-600">
              Flights, hotels, experiences—all booked. You just wake up and review.
            </p>
          </div>
        </div>
        {/* Feature cards */}
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-xl bg-white p-7 text-center shadow-md">
            <FaRegHeart className="mb-3 size-7 text-[#605CD4]" />
            <h4 className="mb-2 text-lg font-semibold">100% Personal</h4>
            <p className="text-sm text-gray-600">
              No templates or generic plans. Every itinerary is crafted just for you.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-white p-7 text-center shadow-md">
            <FaRegClock className="mb-3 size-7 text-[#605CD4]" />
            <h4 className="mb-2 text-lg font-semibold">Saves 12+ Hours</h4>
            <p className="text-sm text-gray-600">
              AI does all the research. You save days of scrolling and stressing.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-white p-7 text-center shadow-md">
            <FaRegCheckCircle className="mb-3 size-7 text-[#605CD4]" />
            <h4 className="mb-2 text-lg font-semibold">Book Everything, Instantly</h4>
            <p className="text-sm text-gray-600">
              All your bookings, confirmations, and custom picks—in one click.
            </p>
          </div>
        </div>
        {/* Gallery */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Image src="/assets/images/dubai.jpg" alt="Dubai" width={170} height={110} className="rounded-xl shadow" />
          <Image src="/assets/images/switzerland.jpg" alt="Switzerland" width={170} height={110} className="rounded-xl shadow" />
          <Image src="/assets/images/venice.jpg" alt="Venice" width={170} height={110} className="rounded-xl shadow" />
        </div>
      </div>
    </section>
  );
}
