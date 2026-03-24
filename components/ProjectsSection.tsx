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
    title: "Givevest",
    description: "Charity & fundraising landing",
    image: "https://picsum.photos/seed/givevest/960/600",
    href: "#",
  },
  {
    id: "garden",
    title: "Garden Service",
    description: "Landscaping & garden care",
    image: "https://picsum.photos/seed/garden/960/600",
    href: "#",
  },
  {
    id: "saas",
    title: "SaaS Dashboard",
    description: "Analytics & team workspace",
    image: "https://picsum.photos/seed/saasdash/960/600",
    href: "#",
  },
  {
    id: "ecommerce",
    title: "Shop Front",
    description: "E-commerce storefront",
    image: "https://picsum.photos/seed/shopfront/960/600",
    href: "#",
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
    onSelect();
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="projects"
      className="scroll-mt-20  py-16 md:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-center md:justify-between">
          <div>
           
            <h2
              id="projects-heading"
              className={`${playfair.className} mt-2 text-[30px] font-bold text-white lg:text-[44px]`}
            >
              My Complete Projects
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
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141416]"
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
                    <p className="mt-4 md:text-[18px] text-[16px] font-medium text-slate-400">{project.title}</p>
                  
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
