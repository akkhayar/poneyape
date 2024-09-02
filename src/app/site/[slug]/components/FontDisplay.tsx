import { useState } from "react";

const FontDisplay = ({ typography }: { typography: string[] }) => {
  const [selectedFont, setSelectedFont] = useState(0);
  return (
    <div className="flex gap-4">
      <div className="w-fit">
        {typography.map((font, i) => (
          <button
            data-selected={selectedFont === i}
            className="flex w-full justify-center border-y border-transparent py-1 text-midGrey hover:border-black data-[selected=true]:border-black data-[selected]:text-black"
            key={font}
            onClick={() => setSelectedFont(i)}
          >
            {font}
          </button>
        ))}
      </div>
      <p className="text-center max-w-[600px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illum nemo
        odit quo at libero a velit dignissimos nesciunt aut deserunt, veniam
        nisi quia, reprehenderit fugit. Possimus similique iusto omnis.
      </p>
    </div>
  );
};

export default FontDisplay;
