'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    name: 'Neha A.',
    city: 'Mumbai',
    quote: 'Random 1 Jibhi planned my 7-day Europe trip in just 5 minutes. I didn’t lift a finger, and the whole journey felt crafted just for me.',
    avatar: '/assets/images/user1.jpg',
    src: '/assets/images/dubai.jpg',
    designation: 'Dubai',
  },
  {
    name: 'Arjun D.',
    city: 'Dubai',
    quote: 'Random 2 I booked Tokyo in one tap—flights, sushi tour, boutique hotel. My friends still don’t believe it was AI!',
    avatar: '/assets/images/user2.jpg',
    src: '/assets/images/japan-1.jpg',
    designation: 'Tokyo',
  },
  {
    name: 'Sara P.',
    city: 'San Francisco',
    quote: 'Random 3Planning used to stress me out for weeks. Now I just tell Jibhi what I want, and I’m ready to go.',
    avatar: '/assets/images/user3.jpg',
    src: '/assets/images/venice.jpg',
    designation: 'Venice',
  },
  {
    name: 'Luca M.',
    city: 'Milan',
    quote: 'Random 4 From gondolas in Venice to mountain hikes in Switzerland, every detail was spot on. Jibhi is my new travel secret!',
    avatar: '/assets/images/user4.jpg',
    src: '/assets/images/switzerland.jpg',
    designation: 'Switzerland',
  },
  {
    name: 'Priya S.',
    city: 'Bangalore',
    quote: 'Random 5 I love how Jibhi took my wish for adventure and turned it into a Swiss Alps escape—no stress, just pure fun.',
    avatar: '/assets/images/user5.jpg',
    src: '/assets/images/swiss-2.jpg',
    designation: 'Swiss Alps',
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
       
        <AnimatedTestimonials testimonials={testimonials} />

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
