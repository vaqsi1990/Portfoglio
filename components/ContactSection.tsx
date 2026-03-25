import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-16 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="contact-heading"
            className={`${playfair.className} text-[30px] font-bold text-white md:text-[44px]`}
          >
            Contact
          </h2>
          <p className="mt-4 text-base leading-7 text-white/90 md:text-lg">
            For quick communication, message me on Telegram or WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          <a
            href="https://t.me/Vaqsi_Margalitadze"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="group flex items-center justify-center gap-3 rounded-2xl border border-white/25 bg-[#22252f]/60 p-6 text-white transition hover:border-white/60 hover:bg-[#22252f]/80"
          >
            <span className="rounded-full border border-white/25 bg-white/5 p-3 transition group-hover:border-white/60">
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current"
                aria-hidden="true"
              >
                <path d="M22.1 3.2L2.6 10.9c-1 .4-1 1.8 0 2.2l5.7 2.2 2.2 5.7c.4 1 1.8 1 2.2 0l7.7-19.5c.4-1-.7-2.1-1.3-1.3zM9.1 15.2l-.2 3.4 1.7-2.3 7.1-7.1-8.7 6z" />
              </svg>
            </span>
            <span className="text-center font-semibold">Telegram</span>
          </a>

          <a
            href="https://wa.me/599344706"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="group flex items-center justify-center gap-3 rounded-2xl border border-white/25 bg-[#22252f]/60 p-6 text-white transition hover:border-white/60 hover:bg-[#22252f]/80"
          >
            <span className="rounded-full border border-white/25 bg-white/5 p-3 transition group-hover:border-white/60">
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current"
                aria-hidden="true"
              >
                <path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.5 0 .1 5.4.1 12c0 2.1.5 4.1 1.5 5.9L0 24l6.3-1.7c1.7.9 3.7 1.3 5.7 1.3h.1c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.6-8.1zM12.1 21.5h-.1c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.7 9.7 0 0 1-1.5-5.1C2.2 6.7 6.6 2.3 12 2.3c2.6 0 5 1 6.9 2.8a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.7 9.8zm5.4-7.3c-.3-.1-1.8-.9-2-.9-.3-.1-.4-.1-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.6-.9-2.1-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.3s1 2.7 1.2 2.9c.1.2 2 3 4.9 4.1 2.9 1.1 2.9.7 3.4.6.5-.1 1.8-.7 2.1-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3z" />
              </svg>
            </span>
            <span className="text-center font-semibold">WhatsApp</span>
          </a>

          <a
            href="tel:+599344706"
            aria-label="Phone"
            className="group flex items-center justify-center gap-3 rounded-2xl border border-white/25 bg-[#22252f]/60 p-6 text-white transition hover:border-white/60 hover:bg-[#22252f]/80"
          >
            <span className="rounded-full border border-white/25 bg-white/5 p-3 transition group-hover:border-white/60">
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current"
                aria-hidden="true"
              >
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.3.56 3.5.56a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.24 1L6.6 10.8z" />
              </svg>
            </span>
            <span className="text-center font-semibold">Call</span>
          </a>
        </div>
      </div>
    </section>
  );
}

