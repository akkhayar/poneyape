import Image from "next/image";
import TagBar from "./TagBar";

type WebsiteCardProps = {
  id: string;
  title: string;
  tags: string[];
  primaryAuthor: string;
  coverImage: string;
  profile: string;
};

const WebsiteCard = ({
  id,
  title,
  tags,
  primaryAuthor,
  coverImage,
  profile,
}: WebsiteCardProps) => {
  return (
    <div className="flex flex-grow justify-center pb-6 md:pb-16">
      <div>
        <a href={`/site/${id}`} className="group relative">
          <Image
            src={coverImage}
            alt="cover-image"
            style={{
              width: "29svw",
              height: "auto",
            }}
            layout="responsive"
            width={16}
            height={9}
            className="mb-6 max-w-[435px] cursor-pointer transition-all duration-300 md:hover:[filter:brightness(0.6)]"
          />
          <button className="c-outline c-white pointer-events-none absolute left-[150px] top-[120px] hidden transition-all duration-300 md:group-hover:block">
            View Detail
          </button>
        </a>
        <div className="flex flex-col gap-2">
          <TagBar tags={tags} />
          <h5 className="semibold cursor-pointer">
            <a href={`/site/${id}`}><h4 className="font-semibold">{title}</h4></a>
          </h5>
          <div className="flex gap-2 items-center">
            <p>By</p>
            <Image
              src={profile}
              width={32}
              height={32}
              alt="profile-picture"
              className="rounded-[32px]"
            />
            <p className="font-roboto underline">{primaryAuthor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;
