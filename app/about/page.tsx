import Image from "next/image";
import farmShop2 from "../../public/assets/farm_shop2.jpeg";
import about1 from "../../public/assets/about1.png";
import about2 from "../../public/assets/about2.png";
import about3 from "../../public/assets/about3.png";
import { publicSans, spaceMono } from "../styles/fonts";

export default function AboutPage() {
  return (
    <div className="bg-snow">
      <div className="container mx-auto 2xl:px-32">
        <div className="grid grid-cols-4 gap-6">
          <Image
            src={farmShop2}
            alt="farm"
            style={{ objectFit: "cover" }}
            className="h-[440px]"
          />
          <Image
            src={farmShop2}
            alt="farm"
            style={{ objectFit: "cover" }}
            className="h-[440px]"
          />
          <Image
            src={farmShop2}
            alt="farm"
            style={{ objectFit: "cover" }}
            className="h-[440px]"
          />
          <Image
            src={farmShop2}
            alt="farm"
            style={{ objectFit: "cover" }}
            className="h-[440px]"
          />
        </div>
        <div className="my-24">
          <h1 className={`text-center text-5xl font-bold !italic ${spaceMono.className}`}>About Halal Agric</h1>
          <br />
          <p className={`text-2xl font-semibold !italic ${publicSans.className}`}>
            Founded in 2024, Halal Agric is driven to fostering more livable and conscious consumerism. Halal Agric promotes sustainable urban living by promoting green spaces, hosting educational
            programming and events, and widening access to locally grown produce in Kaduna and neighboring cities.
          </p>
          <br />
          <br />
          <br />
          <p className={`text-2xl font-semibold !italic ${publicSans.className}`}>
            Halal Agric's purpose is to restore the connection between people and the natural world. We create meaningful livelihood opportunities and steward green spaces in the built environment to
            foster more livable and climate-adapted cities.
          </p>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto grid grid-cols-3 gap-8 px-20 py-8">
          <div>
            {" "}
            <Image
              src={about3}
              alt="farm"
              width={256}
              height={256}
              style={{ objectFit: "cover" }}
              className="h-[256px] w-[256px]"
            />
            <p className={`text-lg !italic ${spaceMono.className}`}>Collaborative environment</p>
          </div>
          <div>
            <p className={`text-lg !italic ${spaceMono.className}`}>Educational programming and events</p>
            <Image
              src={about2}
              alt="farm"
              width={256}
              height={256}
              style={{ objectFit: "cover" }}
              className="h-[256px] w-[256px]"
            />
          </div>
          <div>
            {" "}
            <Image
              src={about1}
              alt="farm"
              width={256}
              height={256}
              style={{ objectFit: "cover" }}
              className="h-[256px] w-[256px]"
            />
            <p className={`text-lg !italic ${spaceMono.className}`}>Children-safe zone</p>
          </div>
        </div>
      </div>
    </div>
  );
}
