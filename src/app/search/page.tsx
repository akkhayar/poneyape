import Image from "next/image";

import WebsiteList from "@/components/common/WebsiteList";

export default async function SearchPage() {
  return (
    <section className="flex flex-col gap-10 px-6 py-10 md:px-16 md:py-20">
      <div className="flex gap-1 pb-4">
        <p className="font-semibold">Hot Trend</p>
        <Image
          src="/assets/images/fire.png"
          alt="fire"
          width={16}
          height={16}
          className="my-auto"
        />
      </div>

      <p className="font-roboto text-[148px] capitalize leading-[177px] tracking-[-10px]">
        Neumorphism
      </p>

      {/* <SearchFilter />

      <div className="grid w-full grid-cols-4 gap-5">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <div className="relative h-[200px] w-full">
              <Image
                src={item.cover}
                alt={item.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <p className="font-semibold">{item.title}</p>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div> */}

      <WebsiteList />
    </section>
  );
}
