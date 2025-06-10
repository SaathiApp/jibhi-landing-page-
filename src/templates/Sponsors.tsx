import Image from 'next/image';

export const Sponsors = () => (
  <section className="w-full bg-white py-10 md:py-14">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
        Our Travel Partners
      </h2>
      <p className="mb-6 text-center text-sm text-gray-400">Trusted partners powering your journeys</p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 px-2 md:px-6">
        <Image
          src="/assets/images/partners/skyscanner1.png"
          alt="Skyscanner logo"
          width={100}
          height={44}
          className="h-12 rounded-md opacity-80 grayscale transition hover:bg-[#f5f4fd] hover:opacity-100 hover:shadow-md hover:grayscale-0 md:h-14"
        />
        <Image
          src="/assets/images/partners/easemytrip.png"
          alt="EaseMyTrip logo"
          width={100}
          height={44}
          className="h-12 rounded-md opacity-80 grayscale transition hover:bg-[#f5f4fd] hover:opacity-100 hover:shadow-md hover:grayscale-0 md:h-14"
        />
        <Image
          src="/assets/images/partners/omio.png"
          alt="Omio logo"
          width={100}
          height={44}
          className="h-12 rounded-md opacity-80 grayscale transition hover:bg-[#f5f4fd] hover:opacity-100 hover:shadow-md hover:grayscale-0 md:h-14"
        />
        <Image
          src="/assets/images/partners/viator1.png"
          alt="Viator logo"
          width={100}
          height={44}
          className="h-12 rounded-md opacity-80 grayscale transition hover:bg-[#f5f4fd] hover:opacity-100 hover:shadow-md hover:grayscale-0 md:h-14"
        />
        <Image
          src="/assets/images/partners/tiqets1.png"
          alt="Tiqets.com logo"
          width={100}
          height={44}
          className="h-12 rounded-md opacity-80 grayscale transition hover:bg-[#f5f4fd] hover:opacity-100 hover:shadow-md hover:grayscale-0 md:h-14"
        />
        <Image
          src="/assets/images/partners/iway.svg"
          alt="i'way logo"
          width={100}
          height={44}
          className="h-12 rounded-md opacity-80 grayscale transition hover:bg-[#f5f4fd] hover:opacity-100 hover:shadow-md hover:grayscale-0 md:h-14"
        />
        <Image
          src="/assets/images/partners/ratehawk.svg"
          alt="Ratehawk logo"
          width={100}
          height={44}
          className="h-12 opacity-80 grayscale transition hover:opacity-100 hover:shadow hover:grayscale-0 md:h-14"
        />
      </div>
    </div>
  </section>
);
