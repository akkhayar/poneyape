import Tag from "./Tag";

const TagBar = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex gap-2">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
};

export default TagBar;