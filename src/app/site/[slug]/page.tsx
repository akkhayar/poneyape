"use client";
import PieChart from "@/components/common/PieChart";
import TagBar from "@/components/common/TagBar";
import Image from "next/image";

type PageProps = { params: { slug: string } };

export const runtime = 'edge';

export default function Page({ params }: PageProps) {
  const data = {
    title: "Future Tracking",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident beatae sequi aut harum neque possimus omnis veniam, quas ab labore sit repellendus, nam ipsum dignissimos numquam illum. Quis, veniam optio!",
    vision:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident beatae sequi aut harum neque possimus omnis veniam, quas ab labore sit repellendus, nam ipsum dignissimos numquam illum. Quis, veniam optio!",
    publishDate: "12 Jun 2024",
    tags: ["Blog", "Corporate"],
    typography: ["Poppins", "Pyidaungsu"],
    colorPalette: ["#E3EBEE", "#DF463C", "#1B3846"],
    authors: ["Thazin Win", "Julia"],
  };

  return (
    <>
      <section className="px-6 py-10">
        <div>
          <p className="c-body font-semibold">{data.title}</p>
        </div>
        <TagBar tags={data.tags} />
        <div className="flex flex-col gap-6 py-6">
          <Image src="" alt="Cover Image"/>
          <h3 className="font-semibold">{data.title}</h3>
          <div className="flex gap-4" aria-label="Authors">
            {data.authors.map((author) => (
              <p key={author} className="c-small underline">
                {author}
              </p>
            ))}
          </div>
        </div>
        <p aria-label="Website Statistics" className="flex items-center">
          {data.publishDate} · 61 views · <PieChart percentage={90} />
        </p>
        <div
          className="flex w-full rounded-[20px] bg-white"
          style={{
            boxShadow: "0px 1px 7px 0px rgba(0, 0, 0, 0.10)",
            backdropFilter: "blur(20px)",
          }}
        >
          <button className="flex-grow py-3">Share</button>
          <button className="flex-grow py-3">Copy Link</button>
          <button className="c-primary c-solid flex-grow rounded-r-[20px] bg-black py-3">
            Vote
          </button>
        </div>
      </section>
      <section className="flex flex-col gap-10 px-6 py-10">
        <div className="border-b border-dashed border-black pb-10">
          <h5 className="mb-4 font-bold">Description</h5>
          <p>{data.description}</p>
        </div>
        <div className="border-b border-dashed border-black pb-10">
          <h5 className="mb-4 font-bold">Vision</h5>
          <p>{data.vision}</p>
        </div>
        <div className="border-b border-dashed border-black pb-10">
          <h5 className="mb-4 font-bold">Typography</h5>
          <div className="flex">
            <div>
              {data.typography.map((font) => (
                <p key={font}>{font}</p>
              ))}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              illum nemo odit quo at libero a velit dignissimos nesciunt aut
              deserunt, veniam nisi quia, reprehenderit fugit. Possimus
              similique iusto omnis.
            </p>
          </div>
        </div>
        <div className="border-b border-dashed border-black pb-10">
          <h5 className="mb-4 font-bold">Color Palette</h5>
          <div className="flex gap-4">
            {data.colorPalette.map((color) => (
              <div
                key={color}
                className="h-[170px] w-16 rounded-[40px] text-white"
                style={{ background: color }}
              >
                <span style={{ transform: "rotate(90deg)" }}>{color}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-dashed border-black pb-10">
          <h5 className="mb-4 font-bold">Tags</h5>
          <div className="flex gap-2">
            {data.tags.map((tag) => (
              <div
                key={tag}
                className="rounded-[35px] border border-black px-4 py-2"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-10">
        <h1 className="font-bold">Other Screens of the Website</h1>
        <p></p>
      </section>
    </>
  );
}
