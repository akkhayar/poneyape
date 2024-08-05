import Image from "next/image";

type WebsiteCardProps = {
  id: string;
  title: string;
  tags: string[];
  author: string;
  coverImage: string;
};

const WebsiteCard = ({
  id,
  title,
  tags,
  author,
  coverImage,
}: WebsiteCardProps) => {
  return (
    <div className="mx-auto pb-6 md:w-[624px]">
      <a href={`/site/${id}`} className="group">
        <Image
          src={coverImage}
          alt="cover-image"
          style={{
            width: "29svw",
            height: "auto",
          }}
          width={880}
          height={660}
          className="mb-6 cursor-pointer transition-all duration-200 md:hover:[filter:brightness(0.7)] md:w-[600px] md:h-[400px]"
        />
      <button
          className="c-outline c-white relative left-[250px] top-[-280px] hidden md:group-hover:block"
          disabled
        >
          View Detail
        </button>
      </a>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <p
              key={tag}
              className="small medium rounded-[20px] bg-neutralLightest px-2 py-1"
            >
              {tag}
            </p>
          ))}
        </div>
        <h5 className="semibold cursor-pointer">
          <a href={`/site/${id}`}>{title}</a>
        </h5>
        <p>By {author}</p>
      </div>
    </div>
  );
};

export default WebsiteCard;
