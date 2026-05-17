import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 pb-12 pt-10 md:gap-10 lg:min-h-[90vh] lg:flex-row lg:items-start lg:justify-between lg:pb-0">
      <div className="w-full max-w-xl space-y-6 text-center lg:mt-[150px] lg:text-left">
        <p className="text-sm uppercase tracking-[0.2em] text-white md:text-base lg:text-[30px]">
          Web Developer
        </p>
        <h1 className="text-[28px] font-bold leading-tight text-white sm:text-[30px] md:text-[32px] lg:text-[44px]">
          Hi, I am Valerian Margalitadze
        </h1>
        <p className="text-base leading-7 text-white md:text-[17px] lg:text-lg">
        I’m a frontend developer with 3 years of freelance experience, mainly working with React, TypeScript, and Next.js. I’ve built several commercial projects, including e-commerce websites, booking systems, and an online testing platform. I’ve worked on full-cycle development and also have some backend experience with Node.js and PostgreSQL. 
        </p>
        <a
          href="/Valerian%20Margalitadze%20.pdf"
          download
          className="inline-block rounded-full border border-white px-6 py-3 font-semibold text-white transition"
        >
          Download Resume
        </a>
      </div>

      <div className="mx-auto flex w-full max-w-md flex-col items-center gap-6 md:max-w-none md:flex-col md:justify-center md:gap-8 lg:relative lg:w-auto lg:max-w-none lg:shrink-0 lg:flex-row lg:gap-10 lg:self-start lg:-top-[150px] xl:gap-12">
        <div className="relative aspect-[4/5] w-full max-w-[300px] shrink-0 overflow-hidden rounded-2xl sm:max-w-[340px] md:max-w-[280px] lg:w-[min(42vw,480px)] lg:max-w-[480px] xl:w-[min(44vw,560px)] xl:max-w-[560px] 2xl:w-[560px]">
          <Image
            src="/me.png"
            alt="Portrait of Vako"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center gap-4 text-white md:gap-5 lg:mt-28 lg:flex-col lg:gap-7 xl:mt-32 xl:gap-8">
          <a
            href="https://www.facebook.com/vaqsii.margalitadze"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="rounded-full border border-white p-2 transition lg:p-3"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current lg:h-7 lg:w-7" aria-hidden="true">
              <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.6c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.2v3.2h2.9V21h3.4z" />
            </svg>
          </a>

          <a
            href="linkedin.com/in/valerian-margalitadze-91aa631a0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white p-2 transition lg:p-3"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current lg:h-7 lg:w-7" aria-hidden="true">
              <path d="M6.9 8.1a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM5.2 9.8h3.4V21H5.2V9.8zM10.7 9.8H14v1.5h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5V21h-3.4v-5.4c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-3.4V9.8z" />
            </svg>
          </a>

          <a
            href="https://t.me/Vaqsi_Margalitadze"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="rounded-full border border-white p-2 transition lg:p-3"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current lg:h-7 lg:w-7" aria-hidden="true">
              <path d="M22.1 3.2L2.6 10.9c-1 .4-1 1.8 0 2.2l5.7 2.2 2.2 5.7c.4 1 1.8 1 2.2 0l7.7-19.5c.4-1-.7-2.1-1.3-1.3zM9.1 15.2l-.2 3.4 1.7-2.3 7.1-7.1-8.7 6z" />
            </svg>
          </a>

          <a
            href="https://wa.me/599344706"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="rounded-full border border-white p-2 transition lg:p-3"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current lg:h-7 lg:w-7" aria-hidden="true">
              <path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.5 0 .1 5.4.1 12c0 2.1.5 4.1 1.5 5.9L0 24l6.3-1.7c1.7.9 3.7 1.3 5.7 1.3h.1c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.6-8.1zM12.1 21.5h-.1c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.7 9.7 0 0 1-1.5-5.1C2.2 6.7 6.6 2.3 12 2.3c2.6 0 5 1 6.9 2.8a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.7 9.8zm5.4-7.3c-.3-.1-1.8-.9-2-.9-.3-.1-.4-.1-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.6-.9-2.1-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.3s1 2.7 1.2 2.9c.1.2 2 3 4.9 4.1 2.9 1.1 2.9.7 3.4.6.5-.1 1.8-.7 2.1-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
