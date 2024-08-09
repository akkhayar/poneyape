type TestimonialProps = {
  rating: number;
  text: string;
  author: string;
  position: string;
};

const Testimonial = ({ rating, text, author, position }: TestimonialProps) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div>stars {rating}</div>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
      <div className="flex gap-5">
        <div>profile</div>
        <div>
          <p className="semibold">{author}</p>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
