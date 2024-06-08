import Image from "next/image";
import jumbotronPic from "../public/assets/jumbotron.png";
import Link from "next/link";

import servicesPic from "../public/assets/services.png";
import consultingPic from "../public/assets/consulting.png";
import farmShopPic from "../public/assets/farm-shop.png";
import blogPic from "../public/assets/blog.png";
import eventsPic from "../public/assets/events.png";
import { publicSans, spaceMono } from "./styles/fonts";

export default function Home() {
  return (
    <main className="bg-snow">
      <Image
        src={jumbotronPic}
        alt="farm"
        placeholder="blur"
        sizes="100vw"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "auto",
        }}
      />
      <section className="container mx-auto text-[#303030] 2xl:p-40">
        <h1 className={`text-center text-[64px] font-bold !italic ${spaceMono.className}`}>Halal Agric</h1>
        <blockquote className={`text-[32px] font-semibold !italic ${publicSans.className}`}>
          Founded in 2024, Halal Agric is driven to fostering more livable and conscious consumerism. We restore the connection between people and the natural world through food, education, and
          events.
        </blockquote>
      </section>
      <section className="container mx-auto mb-32 rounded-lg border border-gray-200 bg-white text-[#303030] shadow-lg">
        <div className="grid grid-cols-[1.5fr_1fr]">
          <Link href={"/services"}>
            <p className="mt-4 pl-4 text-2xl font-bold italic">Services</p>
            <Image
              src={servicesPic}
              alt="services"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
              className="mt-2"
            />
          </Link>
          <Link href={"/consulting"}>
            <p className="mt-4 pl-4 text-2xl font-bold italic">Consulting</p>
            <Image
              src={consultingPic}
              alt="consulting"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
              className="mt-2"
            />
          </Link>
        </div>
        <div className="grid grid-cols-3">
          <Link href={"/farm-shop"}>
            <p className="mt-4 pl-4 text-2xl font-bold italic">Farm shop</p>
            <Image
              src={farmShopPic}
              alt="farm-shop"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
              className="mt-2"
            />
          </Link>
          <Link href={"/blog"}>
            <p className="mt-4 pl-4 text-2xl font-bold italic">Blog</p>
            <Image
              src={blogPic}
              alt="blog"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
              className="mt-2"
            />
          </Link>
          <Link href={"/events"}>
            <p className="mt-4 pl-4 text-2xl font-bold italic">Events</p>
            <Image
              src={eventsPic}
              alt="events"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
              className="mt-2"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
