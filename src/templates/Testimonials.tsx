'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Neha A.',
    city: 'Mumbai',
    quote: 'Random 1 Jibhi planned my 7-day Europe trip in just 5 minutes. I didn’t lift a finger, and the whole journey felt crafted just for me.',
    avatar: '/assets/images/user1.jpg',
    destinationImage: '/assets/images/dubai.jpg',
    destinationLabel: 'Dubai',
  },
  {
    name: 'Arjun D.',
    city: 'Dubai',
    quote: 'Random 2 I booked Tokyo in one tap—flights, sushi tour, boutique hotel. My friends still don’t believe it was AI!',
    avatar: '/assets/images/user2.jpg',
    destinationImage: '/assets/images/japan-1.jpg',
    destinationLabel: 'Tokyo',
  },
  {
    name: 'Sara P.',
    city: 'San Francisco',
    quote: 'Random 3Planning used to stress me out for weeks. Now I just tell Jibhi what I want, and I’m ready to go.',
    avatar: '/assets/images/user3.jpg',
    destinationImage: '/assets/images/venice.jpg',
    destinationLabel: 'Venice',
  },
  {
    name: 'Luca M.',
    city: 'Milan',
    quote: 'Random 4 From gondolas in Venice to mountain hikes in Switzerland, every detail was spot on. Jibhi is my new travel secret!',
    avatar: '/assets/images/user4.jpg',
    destinationImage: '/assets/images/switzerland.jpg',
    destinationLabel: 'Switzerland',
  },
  {
    name: 'Priya S.',
    city: 'Bangalore',
    quote: 'Random 5 I love how Jibhi took my wish for adventure and turned it into a Swiss Alps escape—no stress, just pure fun.',
    avatar: '/assets/images/user5.jpg',
    destinationImage: '/assets/images/swiss-2.jpg',
    destinationLabel: 'Swiss Alps',
  },
];

const popularDestinations = [
  {
    image: '/assets/images/dubai.jpg',
    label: 'Dubai: 5N/6D | Beach, Shopping',
  },
  {
    image: '/assets/images/switzerland.jpg',
    label: 'Switzerland: 7N/8D | Alps, Adventure',
  },
  {
    image: '/assets/images/venice.jpg',
    label: 'Venice: 3N/4D | Canals, Romance',
  },
];

export function Testimonials() {
  // For auto-scroll carousel
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || window.innerWidth < 768) {
      return;
    } // desktop only

    let timeout: ReturnType<typeof setTimeout>;
    let pos = 0;
    const max = el ? el.scrollWidth - el.clientWidth : 0;
    let forward = true;
    let paused = false;

    function scroll() {
      if (paused) {
        return;
      }
      if (forward) {
        pos += 2;
      } else {
        pos -= 2;
      }
      if (pos >= max) {
        forward = false;
      }
      if (pos <= 0) {
        forward = true;
      }
      if (!el) {
        return;
      }
      el.scrollTo({ left: pos, behavior: 'smooth' });
      clearTimeout(timeout);
      timeout = setTimeout(scroll, 24);
    }
    scroll();

    const onMouseEnter = () => {
      paused = true;
    };
    const onMouseLeave = () => {
      paused = false;
      scroll();
    };
    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      clearTimeout(timeout);
      el?.removeEventListener('mouseenter', onMouseEnter);
      el?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full py-20 font-inter"
      style={{
        background:
          'linear-gradient(90deg, #f9f9ff 0%, #e7e5fa 60%, #f4e9fd 100%)',
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-10">
        <h2 className="mb-14 text-center text-4xl font-extrabold tracking-tight text-[#22225a] md:text-5xl">
          What Travelers Say
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto py-2 md:snap-x  md:snap-mandatory"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative flex w-96 shrink-0 flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-xl transition hover:shadow-2xl md:snap-center"
            >
              <div className="relative mb-4 h-32 w-56 overflow-hidden rounded-2xl shadow">
                <Image
                  src={t.destinationImage}
                  alt={t.destinationLabel}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 w-full rounded-b-2xl bg-black py-1 text-sm font-bold text-white">
                  {t.destinationLabel}
                </div>
              </div>
              <Image
                src={t.avatar}
                alt={t.name}
                width={56}
                height={56}
                className="mb-4 rounded-full border-2 border-[#605CD4]/30 object-cover shadow"
              />
              <p className="mb-5 text-base italic text-gray-700">
                “
                {t.quote}
                ”
              </p>
              <div className="mt-auto flex items-center justify-center gap-1 text-base font-semibold text-[#605CD4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 inline-block size-4 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Verified"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 6.293a1 1 0 010 1.414l-6.364 6.364a1 1 0 01-1.414 0l-3.182-3.182a1 1 0 111.414-1.414l2.475 2.475 5.657-5.657a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t.name}</span>
                <span className="ml-1 text-xs font-medium text-green-500">Verified</span>
              </div>
              <div className="text-xs text-gray-500">{t.city}</div>
            </motion.div>
          ))}
        </div>
        <h3 className="mb-10 mt-20 text-center text-2xl font-bold text-[#22225a] md:text-3xl">
          Popular Destinations
        </h3>
        <div className="mx-auto flex w-full max-w-7xl justify-center gap-8">
          {popularDestinations.map((dest, i) => (
            <div key={i} className="relative h-36 w-64 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={dest.image}
                alt={dest.label}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 w-full rounded-b-2xl bg-black px-3 py-2 text-sm font-semibold text-white">
                {dest.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style></style>
    </section>
  );
}
