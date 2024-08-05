import Image from "next/image";

type WebsiteCardProps = {
  title: string;
  tags: string[];
  author: string;
  coverImage: string;
};

const WebsiteCard = ({ title, tags, author, coverImage }: WebsiteCardProps) => {
  return (
    <div className="pb-6 mx-auto md:w-[624px] cursor-pointer">
      <Image src={coverImage} alt="cover-image" width={624} height={416} className="mb-6" />
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <p
              key={tag}
              className="small medium bg-neutralLightest px-2 py-1 rounded-[20px]"
            >
              {tag}
            </p>
          ))}
        </div>
        <h5 className="semibold">{title}</h5>
        <p>By {author}</p>
      </div>
    </div>
  );
};

export default WebsiteCard;
