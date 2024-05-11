import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import instagramPic from "../public/assets/instagram.png";
import facebookPic from "../public/assets/facebook.png";
import linkedinPic from "../public/assets/linkedin.png";
import whatsappPic from "../public/assets/whatsapp.png";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Halalagric",
  description:
    "Founded in 2024, Halal Agric is driven to fostering more livable and conscious consumerism. We restore the connection between people and the natural world through food, education, and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 flex items-center justify-between bg-white px-16">
          <div className="logo h-24 w-64 bg-[#D9D9D9]"></div>
          <nav className="flex items-center gap-4">
            <ul className={`flex text-2xl font-normal italic ${spaceMono.className}`}>
              <li>
                <Link
                  href={"/about"}
                  className="px-4 py-3 hover:bg-snow"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/visit"}
                  className="px-4 py-3 hover:bg-snow"
                >
                  Visit
                </Link>
              </li>
              <li>
                <Link
                  href={"/membership"}
                  className="px-4 py-3 hover:bg-snow"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="px-4 py-3 hover:bg-snow"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link href={"/cart"}>Cart</Link>
          </nav>
        </header>
        {children}
        <footer className={`bg-[#0C0C0C] text-white ${spaceMono.className} 2xl:py-32`}>
          <div className="container mx-auto grid grid-cols-2 gap-12 2xl:px-24">
            <div>
              <h4 className="text-2xl font-bold">HALALAGRIC.ORG</h4>
              <address className="mt-6 italic">
                <p>Address, Address</p>
                <p>12 Rock Road,</p>
                <p>Kaduna, Kaduna 810221</p>
                <p>
                  <a
                    href="mailto:info@halalagric.org"
                    className="underline"
                    target="_blank"
                  >
                    Info@halalagric.org
                  </a>
                </p>
                <p>+234 810 0231 123</p>
              </address>

              <ul className="mt-6 flex items-center gap-4">
                <li>
                  <Link
                    href={"/faq"}
                    className="italic underline"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events/upcoming"
                    className="italic underline"
                  >
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="italic underline"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/farm/shop"
                    className="italic underline"
                  >
                    Farm Shop
                  </Link>
                </li>
              </ul>

              <ul className="mt-6 flex items-center gap-4">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                  >
                    <Image
                      src={instagramPic}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                  >
                    <Image
                      src={facebookPic}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                  >
                    <Image
                      src={linkedinPic}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                  >
                    <Image
                      src={whatsappPic}
                      alt=""
                    />
                  </a>
                </li>
              </ul>
              <p className="mt-6 italic">Site photography credit: Mohammed Umar, Ahmed Umar, Chaz Cruz, Mohammed Umar, Ahmed Umar, Chaz Cruz</p>
            </div>
            <div className="space-y-8">
              <form action="">
                <h4 className="text-2xl font-bold">Newsletter</h4>
                <p className="mt-2">Subscribe to our general bi-monthly newsletter!</p>
                <div className="mt-2 grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    className="rounded-lg border border-[#F3F3F3] bg-transparent px-3 py-1.5 outline-none placeholder:italic placeholder:text-[#F3F3F340]/25"
                    placeholder="Full Name"
                  />
                  <input
                    type="text"
                    className="rounded-lg border border-[#F3F3F3] bg-transparent px-3 py-1.5 outline-none placeholder:italic placeholder:text-[#F3F3F340]/25"
                    placeholder="E-mail"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-pill mt-4 bg-white px-4 py-2 font-bold text-[#303030]"
                >
                  SUBMIT
                </button>
              </form>
              <form action="">
                <h4 className="text-2xl font-bold">Blog</h4>
                <p className="mt-2">Be the first to read our weekly health blog!</p>
                <div className="mt-2 grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    className="rounded-lg border border-[#F3F3F3] bg-transparent px-3 py-1.5 outline-none placeholder:italic placeholder:text-[#F3F3F340]/25"
                    placeholder="Full Name"
                  />
                  <input
                    type="text"
                    className="rounded-lg border border-[#F3F3F3] bg-transparent px-3 py-1.5 outline-none placeholder:italic placeholder:text-[#F3F3F340]/25"
                    placeholder="E-mail"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-pill mt-4 bg-white px-4 py-2 font-bold text-[#303030]"
                >
                  SUBMIT
                </button>
              </form>
              <form action="">
                <h4 className="text-2xl font-bold">Events Bulletin</h4>
                <p className="mt-2">For early access tickets to our events & programs, sign up here!</p>
                <div className="mt-2 grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    className="rounded-lg border border-[#F3F3F3] bg-transparent px-3 py-1.5 outline-none placeholder:italic placeholder:text-[#F3F3F340]/25"
                    placeholder="Full Name"
                  />
                  <input
                    type="text"
                    className="rounded-lg border border-[#F3F3F3] bg-transparent px-3 py-1.5 outline-none placeholder:italic placeholder:text-[#F3F3F340]/25"
                    placeholder="E-mail"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-pill mt-4 bg-white px-4 py-2 font-bold text-[#303030]"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
