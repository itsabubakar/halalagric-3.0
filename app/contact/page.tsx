import Image from "next/image";
import contactPic from "../../public/assets/contact.png";
import { publicSans, spaceMono } from "../styles/fonts";

export default function Contact() {
  return (
    <main className="flex-grow">
      <Image
        src={contactPic}
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
        <h1 className={`text-center text-[64px] font-bold !italic ${spaceMono.className}`}>Contact Us</h1>
        <h2 className={`mt-20 text-2xl font-bold italic`}>Ask Us About:</h2>
        <ul className={`mt-6 list-inside list-disc text-2xl font-medium ${publicSans.className}`}>
          <li>Consultations, designs, and builds</li>
          <li>Workshop information</li>
          <li>Farm produce</li>
          <li>Training program</li>
        </ul>
        <form action="#">
          <div className="mt-20 grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="full_name"
                  className="text-2xl font-medium"
                >
                  Full name (required)
                </label>
                <input
                  type="text"
                  name="full_name"
                  className="mt-1 w-full rounded-md border border-graphite bg-white px-3 py-2 text-2xl"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-2xl font-medium"
                >
                  E-mail (required)
                </label>
                <input
                  type="text"
                  name="email"
                  className="mt-1 w-full rounded-md border border-graphite bg-white px-3 py-2 text-2xl"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-2xl font-medium"
                >
                  Phone (required)
                </label>
                <input
                  type="text"
                  name="phone"
                  className="mt-1 w-full rounded-md border border-graphite bg-white px-3 py-2 text-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-2xl font-medium"
              >
                Message (required)
              </label>
              <textarea
                name="message"
                // rows={11}
                className="mt-1 w-full flex-grow rounded-md border border-graphite bg-white px-3 py-2 text-2xl"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="rounded-[4px] border border-graphite px-3 py-1 font-bold"
            >
              SEND
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
