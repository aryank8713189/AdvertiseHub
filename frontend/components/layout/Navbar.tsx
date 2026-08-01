import Link from "next/link";
import Container from "./Container";

const Navbar = () => {
  return (
    <header className="border-b bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            Advertisement Hub
          </Link>

          {/* Navigation */}
          <nav className="hidden gap-8 md:flex">
            <Link href="/">Home</Link>
            <Link href="/advertisements">Advertisements</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Buttons */}
          <div className="flex gap-3">
            <Link
              href="/login"
              className="rounded-lg border px-4 py-2"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white"
            >
              Register
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;