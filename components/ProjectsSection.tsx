"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const projects = [
  {
    id: "givevest",
    title: "Sleepandbed",
    description: "Charity & fundraising landing",
    image: "/projects/1.jpg",
    href: "https://www.sleepandbed.ge/ge",
  },
  {
    id: "garden",
    title: "Istanbul Travel",
    description: "Landscaping & garden care",
    image: "/projects/2.jpg",
    href: "https://www.istanbultravel.ge/",
  },
  {
    id: "saas",
    title: "Lappetit",
    description: "Analytics & team workspace",
    image: "/projects/3.jpg",
    href: "https://www.lappetit.ge/",
  },
  {
    id: "shcool",
    title: "Eduarena",
    description: "E-commerce storefront",
    image: "/projects/4.jpg",
    href: "https://www.eduarena.ge/",
  },
  {
    id: "ski",
    title: "Skirentfanatic",
    description: "E-commerce storefront",
    image: "/projects/5.jpg",
    href: "https://www.skirentfanatic.ge/en",
  },
  {
    id: "art",
    title: "Irinadzart",
    description: "E-commerce storefront",
    image: "/projects/6.jpg",
    href: "https://www.irinadzart.ge/ka",
  },
  {
    id: "loundry",
    title: "Loundry (In Progress)",
    description: "E-commerce storefront",
    image: "/projects/7.jpg",
    href: "https://loundry-five.vercel.app/",
  },
  {
    id: "postifly",
    title: "Postifly (In Progress)",
    description: "E-commerce storefront",
    image: "/projects/8.jpg",
    href: "https://www.postifly.ge/ka",
  },
] as const;

function CarouselArrow({
  direction,
  onClick,
  label,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/35 text-white transition hover:border-white hover:bg-white hover:text-[#1a1a1a] disabled:pointer-events-none disabled:opacity-35"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {direction === "prev" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  );
}

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });
  const [canPrev, setCanPrev] = useState(true);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Defer the initial state sync to avoid "setState in effect body" warnings.
    const rafId = window.requestAnimationFrame(() => onSelect());
    emblaApi.on("reInit", onSelect).on("select", onSelect);

    // Cleanup listeners on unmount / emblaApi change.
    return () => {
      window.cancelAnimationFrame(rafId);
      emblaApi.off("reInit", onSelect).off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="projects"
      className="scroll-mt-20  mb-14 mt-14"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-center md:justify-between">
          <div>
           
            <h2
              id="projects-heading"
              className={` mx-auto uppercase  mt-3 max-w-3xl text-center text-[25px] leading-tight  text-white md:mt-4 md:text-[30px] lg:leading-[1.15]`}
            >
              My Projects
            </h2>
          </div>
          <div className="flex gap-3 md:gap-4">
            <CarouselArrow
              direction="prev"
              label="Previous projects"
              onClick={scrollPrev}
              disabled={!canPrev}
            />
            <CarouselArrow
              direction="next"
              label="Next projects"
              onClick={scrollNext}
              disabled={!canNext}
            />
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="min-w-0 shrink-0 grow-0 flex-[0_0_auto] w-[min(88vw,420px)] sm:w-[min(75vw,480px)] md:w-[min(calc(50vw-2.25rem),480px)] lg:w-[min(calc(45vw-1.25rem),520px)] mr-6"
              >
                <Link
                  href={project.href}
                  target="_blank"
                  className="group  block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141416]"
                >
                  <article className="relative">
                  
                    <div
                      className="pointer-events-none absolute bottom-0 left-2 right-0 top-4 -z-10 rounded-lg  opacity-90"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.06) 0%, transparent 45%)",
                      }}
                      aria-hidden="true"
                    />
                    <div className="relative overflow-hidden rounded-lg border-[3px] border-white bg-white  transition duration-300 ">
                      <div className="relative aspect-[16/10] w-full bg-neutral-200">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 88vw, (max-width: 1024px) 45vw, 40vw"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                    <p className="mt-4 md:text-[20px] text-[16px] font-medium text-white">{project.title}</p>
                  
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
