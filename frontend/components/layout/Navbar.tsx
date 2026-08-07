import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo1.png"
              alt="Advertisement Hub Logo"
              width={130}
              height={45}
              priority
            />

            
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="transition hover:text-blue-600">
              Home
            </Link>

            <Link
              href="/advertisements"
              className="transition hover:text-blue-600"
            >
              Advertisements
            </Link>

            <Link
              href="/about"
              className="transition hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-gray-100"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
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