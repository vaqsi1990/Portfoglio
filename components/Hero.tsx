import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto flex h-[90vh] max-w-6xl flex-col items-start gap-10  md:flex-row md:justify-between">
      <div className="max-w-xl px-6 md:px-0 mt-10 md:mt-[150px] space-y-6 text-left">
        <p className="md:text-[30px] text-8 uppercase tracking-[0.2em] text-white">Web Developer</p>
        <h1 className="text-[30px] font-bold text-white lg:text-[44px]">Hi, I am Valerian Margalitadze</h1>
        <p className="text-base leading-7 text-white md:text-lg">
          I create modern, fast, and responsive web interfaces with React and Next.js, and I also
          develop scalable backend services with Node.js and NestJS.
        </p>
        <a
          href="/Valerian%20Margalitadze%20.pdf"
          download
          className="inline-block px-6 py-3 font-semibold text-white border border-white rounded-full p-4 transition"
        >
          Download Resume
        </a>
      </div>

      <div className="mx-auto flex flex-col md:flex-row items-center gap-8 md:relative md:-top-[150px] md:self-start">
        <div className="relative w-[320px] overflow-hidden rounded-2xl sm:w-[400px] md:w-[560px] aspect-[4/5]">
          <Image
            src="/me.png"
            alt="Portrait of Vako"
            fill
            className="object-cover"
           
            priority
          />
        </div>

        <div className="flex flex-row md:flex-col md:mt-24  items-center justify-center gap-6 text-white">
          <a
            href="https://www.facebook.com/vaqsii.margalitadze"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition border border-white rounded-full p-2  "
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current " aria-hidden="true">
              <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.6c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.2v3.2h2.9V21h3.4z" />
            </svg>
          </a>
       

          <a
            href="linkedin.com/in/valerian-margalitadze-91aa631a0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition border border-white rounded-full p-2  "
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current " aria-hidden="true">
              <path d="M6.9 8.1a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM5.2 9.8h3.4V21H5.2V9.8zM10.7 9.8H14v1.5h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5V21h-3.4v-5.4c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-3.4V9.8z" />
            </svg>
          </a>
        

          <a
            href="https://t.me/Vaqsi_Margalitadze"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="transition border border-white rounded-full p-2  "
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current " aria-hidden="true">
              <path d="M22.1 3.2L2.6 10.9c-1 .4-1 1.8 0 2.2l5.7 2.2 2.2 5.7c.4 1 1.8 1 2.2 0l7.7-19.5c.4-1-.7-2.1-1.3-1.3zM9.1 15.2l-.2 3.4 1.7-2.3 7.1-7.1-8.7 6z" />
            </svg>
          </a>
      

          <a
            href="https://wa.me/599344706"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition border border-white rounded-full p-2  "
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current " aria-hidden="true">
              <path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.5 0 .1 5.4.1 12c0 2.1.5 4.1 1.5 5.9L0 24l6.3-1.7c1.7.9 3.7 1.3 5.7 1.3h.1c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.6-8.1zM12.1 21.5h-.1c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.7 9.7 0 0 1-1.5-5.1C2.2 6.7 6.6 2.3 12 2.3c2.6 0 5 1 6.9 2.8a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.7 9.8zm5.4-7.3c-.3-.1-1.8-.9-2-.9-.3-.1-.4-.1-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.6-.9-2.1-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.3s1 2.7 1.2 2.9c.1.2 2 3 4.9 4.1 2.9 1.1 2.9.7 3.4.6.5-.1 1.8-.7 2.1-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}