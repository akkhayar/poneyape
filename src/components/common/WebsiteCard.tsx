import Image from "next/image";
import TagBar from "./TagBar";
import Link from "next/link";

const WebsiteCard = ({
  id,
  title,
  tags,
  primaryAuthor,
  coverImage,
  profile,
}: WebsiteCardProps) => {
  return (
    <div className="flex w-full flex-col justify-center">
      <Link href={`/site/${id}`} className="group relative">
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
          className="mb-6 w-full cursor-pointer rounded-[8px] transition-all duration-300 md:hover:[filter:brightness(0.6)]"
        />
        <button className="c-outline c-white pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transition-all duration-300 md:group-hover:block">
          View Detail
        </button>
      </Link>
      <div className="flex flex-col gap-2">
        <TagBar tags={tags} />
        <h5 className="semibold cursor-pointer">
          <Link href={`/site/${id}`}>
            <h4 className="font-semibold">{title}</h4>
          </Link>
        </h5>
        <div className="flex items-center gap-2">
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
  );
};

export default WebsiteCard;
