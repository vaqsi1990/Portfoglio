import Link from "next/link";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },

];

export default function Header() {
  return (
    <header className="top-0 z-50 border-b border-white  ">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-white md:text-[18px] text-4">
          My Portfolio
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-white md:text-[18px] text-4" 
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="rounded-full border border-white px-4 py-2 text-white md:text-[18px] transition hover:opacity-90 dark:border-white/30 dark:bg-white dark:text-black"
        >
          Hire Me
        </Link>
      </nav>
    </header>
  );
}