const TagBar = ({ tags }: { tags: string[] }) => {
  return (
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
  );
};

export default TagBar;