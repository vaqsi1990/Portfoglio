const CONTACT_EMAIL = "v.margalitadze9@gmail.com";
const CONTACT_PHONE = "+599344706";

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-white md:flex-row md:items-center">
        <p className=" text-white md:text-[18px] text-4">
          © {new Date().getFullYear()} Valerian Margalitadze
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-3  md:text-[18px] text-4">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="transition hover:opacity-80"
            aria-label="Email"
          >
            Email: {CONTACT_EMAIL}
          </a>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="transition hover:opacity-80"
            aria-label="Phone"
          >
            Phone: {CONTACT_PHONE}
          </a>
        </div>
      </div>
    </footer>
  );
}