import Image from "next/image";
import farmShop1 from "../../public/assets/farm_shop1.jpeg";
import farmShop2 from "../../public/assets/farm_shop2.jpeg";
import farmShop3 from "../../public/assets/farm_shop3.jpeg";
import farmShop4 from "../../public/assets/farm_shop4.jpeg";
import farmShop5 from "../../public/assets/farm_shop5.jpeg";
import farmShop6 from "../../public/assets/farm_shop6.jpeg";
import farmShop7 from "../../public/assets/farm_shop7.jpeg";
import { spaceMono } from "../styles/fonts";

export default function FarmShop() {
  return (
    <div className="bg-snow">
      <div className="container mx-auto 2xl:px-40">
        <div className="py-32">
          <h1 className={`text-center text-[64px] font-bold !italic ${spaceMono.className}`}>Farm Shop</h1>
          <div className="relative -mt-8 flex justify-between">
            <Image
              src={farmShop1}
              alt="farm"
              width={328}
              height={255}
              style={{ objectFit: "cover" }}
              className="h-[255px] w-[328px]"
            />
            <Image
              src={farmShop3}
              alt="farm"
              width={328}
              height={255}
              style={{ objectFit: "cover" }}
              className="h-[255px] w-[328px]"
            />
            <Image
              src={farmShop2}
              alt="farm"
              width={584}
              height={192}
              style={{ objectFit: "cover" }}
              className="absolute bottom-0 left-1/2 -mb-6 h-[192px] w-[584px] -translate-x-1/2 transform"
            />
          </div>
        </div>
        <div className="my-24 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-xl border border-[#A9B38852] bg-white">
            <Image
              src={farmShop7}
              alt="farm"
              width={352}
              height={320}
              style={{ objectFit: "cover" }}
              className="h-[320px] w-full min-w-[352px] rounded-xl"
            />
            <div className="px-6 py-4">
              <p className={`max-w-full truncate text-2xl ${spaceMono.className}`}>Herbal Blast</p>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-[#A9B38852] bg-white">
            <Image
              src={farmShop2}
              alt="farm"
              width={352}
              height={320}
              style={{ objectFit: "cover" }}
              className="h-[320px] w-full min-w-[352px] rounded-xl"
            />
            <div className="px-6 py-4">
              <p className={`max-w-full truncate text-2xl ${spaceMono.className}`}>Pure Organic Honey</p>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-[#A9B38852] bg-white">
            <Image
              src={farmShop3}
              alt="farm"
              width={352}
              height={320}
              style={{ objectFit: "cover" }}
              className="h-[320px] w-full min-w-[352px] rounded-xl"
            />
            <div className="px-6 py-4">
              <p className={`max-w-full truncate text-2xl ${spaceMono.className}`}>Mixed fruits & vegies</p>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-[#A9B38852] bg-white">
            <Image
              src={farmShop4}
              alt="farm"
              width={352}
              height={320}
              style={{ objectFit: "cover" }}
              className="h-[320px] w-full min-w-[352px] rounded-xl"
            />
            <div className="px-6 py-4">
              <p className={`max-w-full truncate text-2xl ${spaceMono.className}`}>Herbal Blast</p>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-[#A9B38852] bg-white">
            <Image
              src={farmShop5}
              alt="farm"
              width={352}
              height={320}
              style={{ objectFit: "cover" }}
              className="h-[320px] w-full min-w-[352px] rounded-xl"
            />
            <div className="px-6 py-4">
              <p className={`max-w-full truncate text-2xl ${spaceMono.className}`}>Mixed dried/roasted seeds and nuts</p>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-[#A9B38852] bg-white">
            <Image
              src={farmShop6}
              alt="farm"
              width={352}
              height={320}
              style={{ objectFit: "cover" }}
              className="h-[320px] w-full min-w-[352px] rounded-xl"
            />
            <div className="px-6 py-4">
              <p className={`max-w-full truncate text-2xl ${spaceMono.className}`}>Virgin Coconut Oil</p>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
                <div className="rounded-xl border border-coffee-supreme p-2">
                  <p className={`text-lg !italic ${spaceMono.className}`}>N9,000</p>
                  <p className={`text-xs font-bold !italic ${spaceMono.className}`}>25cl</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
